import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    public search: string;

    constructor() { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
    }
}
