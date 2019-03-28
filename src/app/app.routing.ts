import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/event/event.component';
import { StepsToRegisterComponent } from './pages/steps-to-register/steps-to-register.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'events', component: EventsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'steps-to-register', component: StepsToRegisterComponent },
    { path: 'event', redirectTo: 'events', pathMatch: 'full' },
    { path: 'event/:id', component: EventComponent },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
