import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersOnlyDirective } from './directives/numbers-only/numbers-only.directive';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'loans',
    loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [

  ]
})
export class AppRoutingModule { }
