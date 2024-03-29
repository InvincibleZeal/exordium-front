import { NgModule } from '@angular/core';
import { CoreModule } from 'app/core/core.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { EventCardsComponent } from './events/event-cards/event-cards.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { StepsToRegisterComponent } from './steps-to-register/steps-to-register.component';

@NgModule({
    imports: [
        CoreModule,
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        RegisterComponent,
        EventsComponent,
        EventComponent,
        EventCardsComponent,
        TimelineComponent,
        StepsToRegisterComponent
    ],
    exports: [
        HomeComponent,
    ]
})
export class PagesModule { }
