import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Rellax from 'rellax';
import { DataService } from 'app/core/services/data.service';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
    public url: string;
    public event: any;
    constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
        this.url = this.route.snapshot.params['id'];
        this.dataService.getEvent(this.url).subscribe(event => {
            this.event = event;
            console.log('EEHE', this.event);
            if (!this.event) this.router.navigate(['/events'])
        });
    }
}
