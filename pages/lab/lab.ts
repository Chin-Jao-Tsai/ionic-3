import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecondPage } from '../second/second';

/**
 * Generated class for the LabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab',
  templateUrl: 'lab.html',
})
export class LabPage {
  data: any;
  callback: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabPage');
  }

}
