import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { DetailLoanComponent } from './detail-loan/detail-loan.component';


const routes: Routes = [
  { path: '', component:  ListLoansComponent},
  { path: 'loanDetail/:id', component:  DetailLoanComponent},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {}
