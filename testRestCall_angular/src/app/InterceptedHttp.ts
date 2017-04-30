import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../environments/environment";
import { RouterModule, Routes, Router } from '@angular/router';
import 'rxjs/add/operator/catch';

@Injectable()
export class InterceptedHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private _router: Router) {
        super(backend, defaultOptions);
    }
    

    

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
     //   url = this.updateUrl(url);
     console.log("get");
        return super.get(url, options).catch(this.handlerError);
    }

    private handlerError(error:Response){
        console.log("handler errora");
        
       this._router.navigateByUrl("/test");
        return Observable.empty();
       

  }

  

   

   

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }
}