import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    focus;
    focus1;
    focus2;
    constructor() { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
    }

}
