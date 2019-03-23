import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/core/services/data.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    public events: any[] = [];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getEvents().subscribe(events => {
            this.events = events;
            this.events = this.events.sort((a, b) => a.date - b.date);
        })
    }
}
