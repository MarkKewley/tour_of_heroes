import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
} from './components/components'

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ] // so other components who import this module don't need to import RouterModule
})
export class AppRoutingModule {
}
