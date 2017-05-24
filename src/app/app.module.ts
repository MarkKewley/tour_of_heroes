import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent}  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
}  from './components/components';

import {HeroService, InMemoryDataService} from "./common/common";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [HeroService]
})
export class AppModule {
}
