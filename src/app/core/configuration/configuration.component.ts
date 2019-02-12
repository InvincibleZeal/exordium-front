import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigurationService } from '../configuration.service';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

    config = {
        loader: 'rolling',
        padding: 10,
        position: 'right',
        height: 1,
        speed: 1000,
        opacity: 1,
        color: '#000',
        background: '#fff'
    }

    constructor(private configService: ConfigurationService) { }

    ngOnInit() {
    }

    onSubmit() {
        this.configService.updateConfig.next(this.config);
    }
}
