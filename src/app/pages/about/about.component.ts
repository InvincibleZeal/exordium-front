import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/core/data.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    teams = []
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.teams = this.dataService.getTeams();
    }

}
