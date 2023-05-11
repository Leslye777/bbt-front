import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLoansComponent } from './list-loans/list-loans.component';
import { LoansService } from './loans.service';



@NgModule({
  declarations: [
    ListLoansComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[LoansService]
})
export class LoansModule { }
