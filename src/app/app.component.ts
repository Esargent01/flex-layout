import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  title = 'flex-layout';
  router: string;
  isLogin: boolean;

  constructor(private location: Location){

    if (this.location.path() === '/(login:login)') {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }

  }
}
