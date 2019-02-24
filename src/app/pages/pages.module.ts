import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        RouterModule,
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        RegisterComponent
    ],
    exports: [
        HomeComponent,
    ]
})
export class PagesModule { }
