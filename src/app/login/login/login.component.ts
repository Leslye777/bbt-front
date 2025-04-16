import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username = '';
    password = '';
    images = [
        'assets/gf3.png',
        'assets/gf2.jpg',
        'assets/gf1.jpg',
    ];
    currentIndex = 0;
    prevIndex = 0; // Adicionamos prevIndex

    invalidLogin = true;

    constructor(private router: Router, private loginService: LoginService) { }

    ngOnInit(): void {
        this.startCarousel();
    }

    startCarousel(): void {
        setInterval(() => {
            this.nextSlide();
        }, 6000);
    }

    nextSlide(): void {
        this.prevIndex = this.currentIndex;
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateCarouselClasses();
    }

    updateCarouselClasses(): void {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            item.classList.remove('active', 'prev');
            if (index === this.currentIndex) {
                item.classList.add('active');
            } else if (index === this.prevIndex) {
                item.classList.add('prev');
            }
        });
    }

    onSubmit(): void {
      // Chama o service para validar as credenciais
      this.loginService.login(this.username, this.password).subscribe(success => {
        if (success) {
          // Se válido, redireciona para a home
          console.log("entrando aqui")
          console.log(success)
          this.invalidLogin = false;
          this.router.navigate(['/home']);
        } else {
          // Se inválido, seta a flag para true
          this.invalidLogin = true;
        }
      });
    }
}