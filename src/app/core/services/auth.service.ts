import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx'
import { catchError } from 'rxjs/operators';

import { Ng2IzitoastService } from 'ng2-izitoast';

@Injectable()
export class AuthService {
    constructor(private http: Http, public iziToast: Ng2IzitoastService) { }

    register(data: any) {
        return this.http.post(`${environment.api}/participants`, data).map((res: Response) => res.json()).pipe(catchError(this.handleError))
    }

    private handleError(error: any) {
        if (error.error instanceof ErrorEvent) {
            console.log('An error occurred:', error.error.message);
        } else {
            console.log(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        this.iziToast.show({
            title: "Something bad happened",
            progressBarColor: "red",
            onOpened: () => {
                console.log("opened");
            }
        })

        return Observable.throw(
            'Something bad happened; please try again later.');
    };
}
