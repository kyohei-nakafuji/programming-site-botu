import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/Rx';
export declare class componentService {
    private http;
    constructor(http: Http);
    getMessage(): Observable<any>;
}
