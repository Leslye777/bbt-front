import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,  private loginService: LoginService) { }

  ngOnInit(): void {

    console.log("teste")

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
      (response) => {
        // Lida com a resposta do servidor
        console.log(response);
        const routeUrl = '/home'; // Substitua pela URL da rota desejada
        this.router.navigateByUrl(routeUrl, { skipLocationChange: false });
      },
      (error) => {
        this.loginForm.setErrors({ loginFailed: true });
        console.error(error);
      }
    );
  }

}
