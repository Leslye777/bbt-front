import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../books.service';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationModalComponent } from 'src/app/utils/modal/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publicationYear: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
      publisher: ['', Validators.required],
      isbn: ['', Validators.required],
      description: [''],
      copies: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });
  }

  onSubmit() {

    if(this.bookForm.invalid){
      this.bookForm.markAllAsTouched();
      return
    }

    this.bookService.createBook(this.bookForm.value).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () =>{
        this.openConfirmationModal()
        console.info('complete')
      } ,
    });
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
}
