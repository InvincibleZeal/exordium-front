import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { BasicelementsComponent } from './../components/basicelements/basicelements.component';
import { NavigationComponent } from './../components/navigation/navigation.component';
import { TypographyComponent } from './../components/typography/typography.component';
import { NucleoiconsComponent } from './../components/nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './../components/components.component';
import { NotificationComponent } from './../components/notification/notification.component';
import { NgbdModalBasic } from './../components/modal/modal.component';

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
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        ComponentsComponent,
        NotificationComponent,
        NgbdModalBasic,
        AboutComponent,
        RegisterComponent
    ],
    exports: [
        HomeComponent,
    ]
})
export class PagesModule { }
