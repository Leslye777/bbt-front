import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './cards/card/card.component';

import { NumbersOnlyDirective } from './directives/numbers-only/numbers-only.directive';
import { SearchBookPipe } from './pipes/search-book/search-book.pipe';
import { SearchLoanPipe } from './pipes/search-loan/search-loan.pipe';
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { ConfirmationModalComponent } from './modal/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    CardComponent,
    SearchLoanPipe,
    SearchBookPipe,
    NumbersOnlyDirective,
    ConfirmationModalComponent,
    GenericModalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    SearchLoanPipe,
    SearchBookPipe,
    NumbersOnlyDirective,
    ConfirmationModalComponent,
    GenericModalComponent
  ]
})
export class UtilsModule{}
