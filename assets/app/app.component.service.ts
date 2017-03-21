import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
 
@Injectable()
export class componentService {
  constructor(private http: Http) {}
 
  getMessage() {
    return this.http.get('http://127.0.0.1:3000/message')
     .map((response: Response) => 
     {
       const result = response.json();
       return result;
     })
    .catch((error: Response) => Observable.throw(error.json()));
  }
}