import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { DataService } from 'app/core/services/data.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    public search: string;

    constructor(public dataService: DataService) { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
    }
}
