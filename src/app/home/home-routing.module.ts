import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryComponent } from './history/history.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'historico', component: HistoryComponent }, // Nova rota para o histórico
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
