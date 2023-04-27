import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css'],
})
export class DetailBookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  copies: any[] = [];

  ngOnInit() {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.allCopies(bookId);
  }

  public allCopies(id: number) {
    this.bookService.getBookCopiesByBookId(id).subscribe((response) => {
      this.copies = response;
      console.log(response);
    });
  }
  public onEdit() {

  }
  public onDelete() {

  }
}
