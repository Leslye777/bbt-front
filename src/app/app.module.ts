import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuard } from './auth.guard';
import { UtilsModule } from './utils/utils.module'; // Importa o UtilsModule
import { ConfirmationModalComponent } from './utils/modal/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    UtilsModule, // Usa o UtilsModule para modais e outros utilitários
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
