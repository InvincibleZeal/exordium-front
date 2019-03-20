import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-event-cards',
    templateUrl: './event-cards.component.html',
    styleUrls: ['./event-cards.component.scss']
})
export class EventCardsComponent implements OnInit {

    @Input() tag: string;
    @Input() search: string;
    @Input() events: any[];
    constructor() { }

    ngOnInit() {
    }

}
