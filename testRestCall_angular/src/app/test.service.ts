import { Injectable } from '@angular/core';
import { Http, Jsonp, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { RouterModule, Routes, Router } from '@angular/router';

@Injectable()
export class TestService {

  constructor(private http: Http, private _router: Router) { }

  test(){
   // this._router.navigate(['test']);
    return this.http.get("http://localhost:8080/getName") 
                         .map((res:Response) => res.json());
                        
      
  }

   handlerError(error:Response){

    return Observable.throw(error);

  }

}
