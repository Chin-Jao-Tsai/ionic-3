import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GreetingService } from '../../providers/greeting.service';
import { LabPage } from '../lab/lab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    popData: any;
    bgColor = '';
    constructor(public navCtrl: NavController, public mc: ModalController,
              public gs: GreetingService) {
  }
  
  ionViewWillEnter(){
    console.log('ionViewWillEnter: general');
  }

  mouseEnter(event){
    if(event) {
      this.bgColor = 'blue';
    } else {
      this.bgColor = '';
    }
  }

  
}
