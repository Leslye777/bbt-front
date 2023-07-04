import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { LoansService } from './loans.service';
import { LoansRoutingModule } from './loans-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SearchLoanPipe } from '../pipes/search-loan/search-loan.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DetailLoanComponent } from './detail-loan/detail-loan.component';
import { LoanComponent } from './loan/loan.component';
import { DevolutionComponent } from './devolution/devolution.component';



@NgModule({
  declarations: [
    ListLoansComponent, SearchLoanPipe, DetailLoanComponent, LoanComponent, DevolutionComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule


  ],
  exports:[SearchLoanPipe],
  providers:[LoansService, SearchLoanPipe]
})
export class LoansModule { }
