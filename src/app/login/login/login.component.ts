import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SessionStorageService } from 'angular-web-storage';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,  private loginService: LoginService,
    private session: SessionStorageService, private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      // Exibe mensagens de erro nos campos inválidos
      this.loginForm.markAllAsTouched();
      return;
    }

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.loginService.login(username, password).subscribe(
      (response: any) => {
        // Lida com a resposta do servidor
        console.log(response);
        this.session.set('token', response.access_token);

        const tokenInfo = this.jwtHelper.decodeToken(response.access_token);
        console.log(tokenInfo); // Exibe as informações do token no console
        this.session.set('email', tokenInfo.user_name);
        this.session.set('role', tokenInfo.authorities[0]);


        const routeUrl = '/home';
        this.router.navigateByUrl(routeUrl, { skipLocationChange: false });
      },
      (error) => {
        this.loginForm.setErrors({ loginFailed: true });
        console.error(error);
      }
    );
  }

}
