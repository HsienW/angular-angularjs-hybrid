import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'I\'m angular8 root';

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        const avatar1RootDom = document.getElementById('avatar1');
        if (route.url.match(/avatar2/)) {
          avatar1RootDom.style.display = 'none';
        } else {
          avatar1RootDom.style.display = 'block';
        }
      }
    });
  }
}
