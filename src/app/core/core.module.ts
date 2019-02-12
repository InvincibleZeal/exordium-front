import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxInputLoaderModule } from 'ngx-input-loader'
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { ConfigurationComponent } from './configuration/configuration.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ConfigurationService } from './configuration.service';

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
        ConfigurationComponent,
        ShowcaseComponent
    ],
    exports: [
        NgbModule,
        ConfigurationComponent,
        ShowcaseComponent,
    ],
    providers: [ConfigurationService]
})
export class CoreModule { }
