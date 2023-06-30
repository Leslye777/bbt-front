import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private router: Router) { }

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


  title = 'LibertyLib';

}
