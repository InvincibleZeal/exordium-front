import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/core/services/data.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    public search: string;
    public events: any[] = [];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.events = this.dataService.getEvents();
    }

}