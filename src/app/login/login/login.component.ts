import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username = '';
    password = '';
    images = [
        'assets/gf1.jpg',
        'assets/gf2.jpg',
        'assets/gf3.png'
    ];
    currentIndex = 0;
    prevIndex = 0; // Adicionamos prevIndex

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.startCarousel();
    }

    startCarousel(): void {
        setInterval(() => {
            this.nextSlide();
        }, 4000);
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
        console.log('Usuário:', this.username);
        console.log('Senha:', this.password);

        this.router.navigate(['/home'])
    }
}