import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';
import {MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    NguCarouselModule,
    LoginRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          const token = localStorage.getItem('token');
          return token ? token : null; // ou return token ? token : '';
        },
        // Outras opções de configuração, se necessário
      },
    }),
  ],
  providers:[LoginService]
})
export class LoginModule { }
