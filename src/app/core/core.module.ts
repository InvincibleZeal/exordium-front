import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxInputLoaderModule } from 'ngx-input-loader'
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { DataService } from './data.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        NgxInputLoaderModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        ColorPickerModule
    ],
    declarations: [
    ],
    exports: [
        NgbModule,
    ],
    providers: [DataService]
})
export class CoreModule { }
