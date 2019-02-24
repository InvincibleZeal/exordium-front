import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
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
        var rellaxHeader = new Rellax('.rellax-header');
        this.teams = this.dataService.getTeams();
    }

}
