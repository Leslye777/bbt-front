import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../books.service';
import { Location } from '@angular/common';
import { ConfirmationModalComponent } from 'src/app/modal/confirmation-modal/confirmation-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css'],
})
export class DetailBookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private dialog: MatDialog,
    private router: Router
  ) {}

  copies: any[] = [];
  editing = false;


  ngOnInit() {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.allCopies(bookId);
  }

  onEdit() {
    this.editing = true;
  }


  public allCopies(id: number) {
    this.bookService.getBookCopiesByBookId(id).subscribe((response) => {
      this.copies = response;
      console.log(response);
    });
  }

  public onDelete() {

  }

  openConfirmationModal() {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        title: 'New book',
        message: 'New book registered'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/books/'],);


      if (result) {
      } else {
        // O usuário cancelou o modal
      }
    });
  }

  onSubmit() {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));

    console.log(this.copies[0].book)
    this.bookService.updateBook(this.copies[0]?.book, bookId).subscribe(() => {
      this.editing = false;
      this.openConfirmationModal()
    });
  }




}
