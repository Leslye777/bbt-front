import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-loan',
  templateUrl: './detail-loan.component.html',
  styleUrls: ['./detail-loan.component.css']
})
export class DetailLoanComponent implements OnInit {

  constructor(private loanService: LoansService, private route: ActivatedRoute) { }

  loan: any;
  user: any;

  ngOnInit() {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.getData(bookId);
  }

  public getData(id: number) {
    this.loanService.getLoan(id).subscribe(response => {
      console.log(response);
      this.loan = response;
      this.getUser(this.loan?.userId);
    });
  }

  getUser(id: number) {
    this.loanService.getUserById(id).subscribe(response => {
      console.log(response);
      this.user = response
    });
  }



}
