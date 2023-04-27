import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeService } from './home.service';



@NgModule({
  declarations: [
    HomePageComponent,

  ],
  imports: [
    CommonModule,

  ],
  providers:[HomeService]

})
export class HomeModule { }
