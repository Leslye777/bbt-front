import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { SearchLoanPipe } from '../../pipes/search-loan/search-loan.pipe';
import { interval } from 'rxjs';
import { ConfirmationModalComponent } from 'src/app/modal/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.css']
})
export class ListLoansComponent implements OnInit {


  constructor(private loanService: LoansService, private searchLoanPipe: SearchLoanPipe,
    private dialog: MatDialog, private route: Router, private sessionStorage: SessionStorageService) { }

  loans: any[] = [];
  searchValue: string = '';
  selectedSearchType: string = 'userId';
  searchResult: any[] = [];
  userRole: any;

  ngOnInit(): void {
    this.getAllLoans();
  }

  public loanDetail(id: number){
    this.route.navigate(['/loans/loanDetail/', id],);
  }

  public getAllLoans(){

    if(this.verificaUser()){
      const user = this.sessionStorage.get('email')
      this.loanService.getUserByEmail(user).subscribe(response => {
        this.loanService.getLoansByUser(response.id).subscribe(response => {
          this.loans = response;
          this.searchResult = response;
        });
      });
    }else{
      this.loanService.getLoans().subscribe(response => {
        this.loans = response;
        this.searchResult = response;
      });
    }


  }

  renew(id:any){
    this.loanService.putRenew(id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () =>{
        this.openConfirmationModal()
        console.info('complete')
      } ,
    });
  }

  openConfirmationModal() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: 'Renewed',
        message: 'The loan was renewed'
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.route.navigate(['/loans']);

      if (result) {

      } else {
        // O usuário cancelou o modal
      }
    });
  }

  isExpired(expecteReturnDate: string): boolean {
    const currentDate = new Date();
    const returnDate = new Date(expecteReturnDate);
    return returnDate < currentDate;
  }

  searchLoan() {
    console.log(this.searchValue, this.selectedSearchType)
    this.searchResult = this.searchLoanPipe.transform(this.loans, this.searchValue, this.selectedSearchType);
  }
/* PARTE DO USER*/
  public verificaUser(){
    this.userRole = this.sessionStorage.get('role')
    if(this.userRole === 'USER'){
      return true
    }
    return false
  }

}
