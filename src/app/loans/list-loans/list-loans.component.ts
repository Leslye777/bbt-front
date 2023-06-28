import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { SearchLoanPipe } from '../../pipes/search-loan/search-loan.pipe';
import { interval } from 'rxjs';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.css']
})
export class ListLoansComponent implements OnInit {

  constructor(private loanService: LoansService, private searchLoanPipe: SearchLoanPipe) { }

  loans: any[] = [];
  searchValue: string = '';
  selectedSearchType: string = 'title';
  searchResult: any[] = [];

  ngOnInit(): void {
    this.getAllLoans();

    // Atualizar a cada 5 segundos
    interval(5000).subscribe(() => {
      this.getAllLoans();
    });
  }

  public getAllLoans(){
    this.loanService.getLoans().subscribe(response => {
      this.loans = response;
      this.searchResult = response;
    });
  }

  searchLoan() {
    this.searchResult = this.searchLoanPipe.transform(this.loans, this.searchValue, this.selectedSearchType);
  }

}
