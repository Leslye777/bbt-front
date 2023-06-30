import { HomeService } from './../home.service';
import { Component, OnInit, ElementRef, Renderer2, IterableDiffers, ChangeDetectorRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SessionStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel')
  myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1, 2, 3];

  constructor(private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer,
    private session: SessionStorageService, private homeService: HomeService) {}
  ngOnInit(): void {
    this.getData();


  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: number) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  sanitizeImagePath(imagePath: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }

  public getData(){
    console.log(this.session.get('email'))
    console.log(this.session.get('role'))
  }


}
