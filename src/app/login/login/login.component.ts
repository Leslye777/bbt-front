import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    console.log("teste")

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    // if (this.loginForm.invalid) {
    //   // Exibe mensagens de erro nos campos inválidos
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }

    this.router.navigate(['/home/'],);
    // Resto do código para realizar o login
  }
}
