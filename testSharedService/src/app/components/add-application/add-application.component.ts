import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {

  constructor(private commonService: CommonService ) { }

  ngOnInit() {
  }

  addApp(name: any){
    alert(name);
    this.commonService.notifyOther({option: 'get', value: name});
    this.commonService.setData("RaviTeja");
  }

}
