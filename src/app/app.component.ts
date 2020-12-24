import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  public url: string;
  public isLogin = false;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      console.log('url:::',location.path());
      if(location.path() != ''){
        this.url = location.path();
      } else {
        this.url = 'login'
      }
      if (this.url.indexOf('login') > 0) {
        this.isLogin = true;
      }
    });
  }


  title = 'oxbowms';
}
