import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GreetingService } from '../providers/greeting.service';

import { HomePage } from '../pages/home/home';
import { LabPage } from '../pages/lab/lab';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LabPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LabPage
  ],
  providers: [
    GreetingService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
