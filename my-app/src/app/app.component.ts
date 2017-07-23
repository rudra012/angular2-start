import {Component} from "@angular/core";

export class Hero {
  id: number;
  name: string;
}

// The HEROES array is of type Hero
const HEROES: Hero[] = [
  {id: 11, name: 'IronMan'},
  {id: 12, name: 'Thor'},
  {id: 13, name: 'Hulk'},
  {id: 14, name: 'BatMan'},
  {id: 15, name: 'Wonder Woman'},
  {id: 16, name: 'AquaMan'},
  {id: 17, name: 'Spiderman'},
  {id: 18, name: 'Vision'},
  {id: 19, name: 'Captain America'},
  {id: 20, name: 'Black Widow'}
];


@Component({
  selector: 'app-root',
  // template: ` <h1>{{title}}</h1>`
  // styles: [` h1 { color: red; }`],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'My Favourite of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
