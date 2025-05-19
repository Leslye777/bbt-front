import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeService } from './home.service';
import { HomeRoutingModule } from './home-routing.module';
import { NguCarouselModule } from '@ngu/carousel';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { UtilsModule } from '../utils/utils.module'; // Importa o UtilsModule
import { MatExpansionModule } from '@angular/material/expansion'; // Importa o Accordion
import { HistoryComponent } from './history/history.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConsultasComponent } from './consultas/consultas.component'; // Importa o módulo de gráficos
@NgModule({
  declarations: [
    HomePageComponent,
    HistoryComponent,
    RelatoriosComponent,
    ConsultasComponent, // Certifique-se de que o componente está declarado aqui
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NguCarouselModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    UtilsModule, // Usa o UtilsModule para cards e outros utilitários
    MatExpansionModule, // Adiciona o Accordion
    NgxChartsModule, // Adiciona o módulo de gráficos
  ],
  providers: [HomeService],
})
export class HomeModule {}
