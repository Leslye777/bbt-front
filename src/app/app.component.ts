import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private router: Router,  private session: SessionStorageService) { }

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

  title = 'LibertyLib';

}
