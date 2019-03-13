import { NgModule } from '@angular/core';
import { CoreModule } from 'app/core/core.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';

@NgModule({
    imports: [
        CoreModule,
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        RegisterComponent,
        EventsComponent
    ],
    exports: [
        HomeComponent,
    ]
})
export class PagesModule { }
