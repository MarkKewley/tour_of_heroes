import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../../common/common';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
