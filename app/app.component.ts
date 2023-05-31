import { Component, ViewChild } from '@angular/core';
import { Platform, Config, Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
// import { LabPage } from '../pages/lab/lab';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // this.nav.setRoot(LabPage);
    });
  }
}
