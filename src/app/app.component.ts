import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'LibertyLib';
  userRole: any;

  constructor(private router: Router,  private session: SessionStorageService,
    private sanitizer: DomSanitizer) { }

  lastSegment: any;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlTree = this.router.parseUrl(event.urlAfterRedirects);
        const segments = urlTree.root.children['primary'].segments;
        if (segments.length > 0) {
          this.lastSegment = segments[0].path;
        }
      }
    });
  }

  exit(){
    this.session.remove('token');
    console.log("saiu");
  }

  sanitizeImagePath(imagePath: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }



  public verificaUser(){
    this.userRole = this.session.get('role')
    if(this.userRole === 'USER'){
      return true
    }
    return false
  }

}
