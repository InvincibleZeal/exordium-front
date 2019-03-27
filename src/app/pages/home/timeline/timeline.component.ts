import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/core/services/data.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    public events: any[] = [];
    public timeline: any[] = [];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getEvents().subscribe(events => {
            this.events = events;
            console.log('TL', this.events);
            this.events.forEach(event => {
                event.rounds.forEach(round => {
                    this.timeline.push({
                        title: event.name,
                        url: event.url,
                        ...round
                    })
                })
            })
            console.log(this.timeline, this.timeline.length);
            this.timeline = this.timeline.sort((a, b) => a.date.from - b.date.from);
            console.log(this.timeline);
            // this.events = this.events.sort((a, b) => a.date - b.date);
        })
    }
}
