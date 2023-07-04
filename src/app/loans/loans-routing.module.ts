import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { DetailLoanComponent } from './detail-loan/detail-loan.component';
import { LoanComponent } from './loan/loan.component';
import { DevolutionComponent } from './devolution/devolution.component';


const routes: Routes = [
  { path: '', component:  ListLoansComponent},
  { path: 'loanDetail/:id', component:  DetailLoanComponent},
  { path: 'loan', component:  LoanComponent},
  { path: 'devolution', component:  DevolutionComponent},



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {}
