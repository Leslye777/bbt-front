import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLoansComponent } from './list-loans/list-loans.component';


const routes: Routes = [
  { path: '', component:  ListLoansComponent},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansRoutingModule {}
