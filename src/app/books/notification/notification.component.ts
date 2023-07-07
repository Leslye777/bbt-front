import { Component, OnInit } from '@angular/core';
import { BookService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message = ''
  link = ''

  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
  }

  teste(){
    var aux = {
      message: this.message,
      link: this.link
    }

    this.bookService.createNote(aux).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () =>{
        this.router.navigate(['/books/'],);
      } ,
    });

  }

}
