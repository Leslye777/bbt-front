import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BooksRoutingModule } from './books-routing.module';
import { BookService } from './books.service';
import { CreateBookComponent } from './create-book/create-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { SearchBookPipe } from '../pipes/search-book/search-book.pipe';
import { NumbersOnlyDirective } from '../directives/numbers-only/numbers-only.directive';

@NgModule({
  declarations: [ListBooksComponent, DetailBookComponent, SearchBookPipe, CreateBookComponent, NumbersOnlyDirective],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,


  ],
  exports:[
    SearchBookPipe
  ],
  providers:[BookService, SearchBookPipe]
})
export class BooksModule {}
