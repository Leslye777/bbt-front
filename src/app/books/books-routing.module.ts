import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './list-books/list-books.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { NotificationComponent } from './notification/notification.component'


const routes: Routes = [
  { path: '', component: ListBooksComponent },
  { path: 'bookDetail/:id', component: DetailBookComponent },
  { path: 'createBook', component: CreateBookComponent },
  { path: 'notification', component: NotificationComponent },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
