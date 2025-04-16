import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './cards/card/card.component';

import { NumbersOnlyDirective } from './directives/numbers-only/numbers-only.directive';
import { SearchBookPipe } from './pipes/search-book/search-book.pipe';
import { SearchLoanPipe } from './pipes/search-loan/search-loan.pipe';

@NgModule({
  declarations: [
    CardComponent,
    SearchLoanPipe,
    SearchBookPipe,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    SearchLoanPipe,
    SearchBookPipe,
    NumbersOnlyDirective
  ]
})
export class UtilsModule{}
