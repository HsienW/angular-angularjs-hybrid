import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'I\'m angular8 root';
  isNg8 = true;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        const angular1RootDom = document.getElementById('angular1Root');

        console.log('查看查看查看查看查看');
        console.log(route);

        if (route.url.match(/angular8/)) {
          angular1RootDom.style.display = 'none';
          this.isNg8 = true;
        } else {
          this.isNg8 = false;
          angular1RootDom.style.display = 'block';
        }
      }
    });
  }
}
