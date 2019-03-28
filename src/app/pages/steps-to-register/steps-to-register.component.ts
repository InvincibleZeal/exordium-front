import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-steps-to-register',
    templateUrl: './steps-to-register.component.html',
    styleUrls: ['./steps-to-register.component.scss']
})
export class StepsToRegisterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
    }

}
