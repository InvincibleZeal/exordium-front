import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
        this.url = this.route.snapshot.params['id'];
        this.event = this.dataService.getEvent(this.url);
        if (!this.event) this.router.navigate(['/events']);
        console.log(this.event);
    }
}
