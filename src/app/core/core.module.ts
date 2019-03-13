import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxInputLoaderModule } from 'ngx-input-loader'
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { EventFilterPipe } from './pipes/event-filter.pipe';
import { DataService } from './data.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        NgxInputLoaderModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        HttpModule,
    ],
    declarations: [
        EventFilterPipe
    ],
    exports: [
        EventFilterPipe,
        NgbModule,
        CommonModule,
        FormsModule,
        NgxInputLoaderModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        RouterModule,
        HttpModule,
    ],
    providers: [DataService]
})
export class CoreModule { }
