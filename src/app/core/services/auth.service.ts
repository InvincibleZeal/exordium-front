import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import 'rxjs/Rx'

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    register(data: any) {
        return this.http.post(`${environment.api}/participants`, data).map((res: Response) => res.json());
    }
}
