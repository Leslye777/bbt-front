import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookService } from './books.service';
import { HttpClientModule } from '@angular/common/http';


import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './list-books/list-books.component';
import { FormsModule } from '@angular/forms';
import { DetailBookComponent } from './detail-book/detail-book.component';

@NgModule({
  declarations: [ListBooksComponent, DetailBookComponent],
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
    HttpClientModule

  ],
  providers:[BookService]
})
export class BooksModule {}
