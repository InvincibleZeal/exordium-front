import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { DataService } from './core/services/data.service';
import { AuthService } from './core/services/auth.service';
import { Ng2IzitoastService } from 'ng2-izitoast';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        PagesModule,
        NgbModule.forRoot(),
    ],
    providers: [DataService, AuthService, Ng2IzitoastService],
    bootstrap: [AppComponent]
})
export class AppModule { }
