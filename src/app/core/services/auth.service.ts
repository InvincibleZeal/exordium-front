import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    register(data: any) {
        return this.http.post(`${environment.api}/participants`, data)
            .map((res: Response) => res.json())
            .catch((err: Response) => Observable.of(err.json()));
    }

    participate(data: any) {
        return this.http.post(`${environment.api}/events/participate`, data)
            .map((res: Response) => res.json())
            .catch((err: Response) => Observable.of(err.json()));
    }
}
