import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.buscarLivros();

  }

  public buscarLivros(){
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
      console.log(response)
    });
  }

  public bookDetail(id: number){
    this.router.navigate(['/books/bookDetail/', id],);
  }

}
