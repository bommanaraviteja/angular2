import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddApplicationComponent } from './components/add-application/add-application.component';
import { MyAppsComponent } from './components/my-apps/my-apps.component';

import {CommonService} from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    AddApplicationComponent,
    MyAppsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
