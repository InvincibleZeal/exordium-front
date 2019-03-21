import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'app/core/services/data.service';
@Component({
    selector: 'app-event-cards',
    templateUrl: './event-cards.component.html',
    styleUrls: ['./event-cards.component.scss']
})
export class EventCardsComponent implements OnInit {

    @Input() tag: string;
    @Input() search: string;
    public events: any[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getEvents().subscribe(events => {
            this.events = events;
            this.events.forEach(event => {
                if (event.description.length > 150) {
                    event.description = event.description.slice(0, 150) + '...';
                }
            });
        });
    }
}
