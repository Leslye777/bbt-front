import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    username = '';
    password = '';
    images = [
        'assets/gf2.png',
        'assets/gf1.png',
        'assets/gf3.png',
        'assets/gf4.png',
        'assets/gf5.png',
        'assets/gf6.png',
        'assets/gf7.png',
    ];
    currentIndex = 0;
    prevIndex = 0;

    invalidLogin = true;

    constructor(private router: Router, private loginService: LoginService) { }

    ngOnInit(): void {
          this.startCarousel(); // Inicia o intervalo do carrossel
    }

    ngAfterViewInit(): void {
        this.updateCarouselClasses(); // Exibe a primeira imagem após o DOM ser renderizado
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
                item.classList.add('active'); // Define a imagem atual como ativa
            } else if (index === this.prevIndex) {
                item.classList.add('prev'); // Define a imagem anterior como "prev"
            }
        });
    }

    onSubmit(): void {
        this.loginService.login(this.username, this.password).subscribe(success => {
            if (success) {
                this.invalidLogin = false;
                this.router.navigate(['/home']);
            } else {
                this.invalidLogin = true;
            }
        });
    }
}
