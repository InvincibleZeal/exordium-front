import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxInputLoaderModule } from 'ngx-input-loader'
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { EventFilterPipe } from './pipes/event-filter.pipe';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

const MODULES = [
    CommonModule,
    FormsModule,
    NgxInputLoaderModule,
    NouisliderModule,
    JWBootstrapSwitchModule,
    HttpModule,
    NgbModule,
    RouterModule,
]

const COMPONENTS = [
    EventFilterPipe
]
@NgModule({
    imports: [...MODULES],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS, ...MODULES],
    providers: []
})
export class CoreModule { }
