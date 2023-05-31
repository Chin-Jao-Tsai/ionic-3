import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Api } from '../../providers/api';

export class SystemGeneralInfoResponse {
  
  public status: string = ''
  public reason: string = ''
  public osinfo: any = {}
  public xms: any = []
  public system_storage: any = {}
  public system_time: any = {}

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: SystemGeneralInfoResponse = new SystemGeneralInfoResponse()
  data$: any
  errorMessages: any
  alive: boolean = false

  constructor(public navCtrl: NavController, private api:Api) {

  }

  
  ionViewWillEnter(){
    console.log('ionViewWillEnter: general')
    this.alive = true
    this.initRefresh()
  }

  ngOnInit() {
    
    this.alive = true
    let geninfo = 'https://api.myjson.com/bins/l69aq'
    this.api.get<SystemGeneralInfoResponse>(geninfo, false)
    .first()
    .subscribe((data) => {
      console.log('GeneralInfo first request');
      this.data = data
    })
    
  }

  initRefresh(){
    
    let geninfo = 'https://api.myjson.com/bins/l69aq'
    this.data$ = Observable.interval(5000)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.api.get<SystemGeneralInfoResponse>(geninfo, false)
        .subscribe((data) => {
          console.log('GeneralInfo updated');
          this.data = data
        })
      })
  }


}
