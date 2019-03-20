import { NgModule } from '@angular/core';
import { CoreModule } from 'app/core/core.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TeaserComponent } from './teaser/teaser.component';

const COMPONENTS = [
    NavbarComponent,
    FooterComponent,
    TeaserComponent
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [CoreModule],
    exports: [
        ...COMPONENTS
    ],
})

export class SharedModule { }