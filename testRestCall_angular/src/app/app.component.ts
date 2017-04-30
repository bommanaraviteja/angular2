import { Component } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private testService: TestService){

  }

  test(){
this.testService.test()
      .subscribe(data => console.log(data),
        error => console.log("Error!"),
        () => console.log("finished!")
      );
  }

}
