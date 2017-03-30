import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.css']
})
export class MyAppsComponent implements OnInit {
  title: any;
  private subscription: Subscription;
  constructor(private commonService: CommonService) { 
    this.title = 'RaviTeja';
  }

  ngOnInit() {
     this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'get') {
        this.testCall(res.value);
      }
    });
  }

  testCall(name: any){
    this.title =  name;

    alert(this.commonService.getData());
  }
   
}
