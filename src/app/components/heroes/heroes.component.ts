import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from "../../common/common";

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getHeroes()

    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(data => this.heroes = data)
            .catch(err => console.log(err));
    }

    add(heroName: string): void {
        heroName = heroName.trim();

        if (!heroName) return;

        this.heroService.create(heroName)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            })
            .catch(err => console.log(err));
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            })
    }

    goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}