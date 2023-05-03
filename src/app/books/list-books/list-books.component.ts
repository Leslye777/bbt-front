import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../books.service';
import { Router } from '@angular/router';
import { SearchBookPipe } from '../../pipes/search-book/search-book.pipe';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books: any[] = []; // assume que a lista de livros é carregada em algum lugar
  selectedSearchType: string = 'title';
  searchValue: string = '';
  searchResult: any[] = [];

  constructor(private bookService: BookService, private router: Router, private searchBookPipe: SearchBookPipe) { }

  ngOnInit(): void {
    this.buscarLivros();

  }

  public buscarLivros(){
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
      this.searchResult = response;
    });
  }

  searchBooks() {
    this.searchResult = this.searchBookPipe.transform(this.books, this.searchValue, this.selectedSearchType);
  }


  public bookDetail(id: number){
    this.router.navigate(['/books/bookDetail/', id],);
  }

}
