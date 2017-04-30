import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GlobalErrorHandler } from './GlobalErrorHandler';
import { AppComponent } from './app.component';
import {TestService} from './test.service';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {httpFactory} from './httpFactory';
import { RouterModule, Routes, Router } from '@angular/router';
const appRoutes: Routes = [
  
  { path: 'test', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TestService, {
            provide: Http,
            useFactory: httpFactory,
            
            deps: [XHRBackend, RequestOptions, Router]
        }],
  bootstrap: [AppComponent]
})
export class AppModule { }
