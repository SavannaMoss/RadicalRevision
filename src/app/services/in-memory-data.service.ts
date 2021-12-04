import { Injectable }        from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Character }         from "../models/character";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let characters: Character[] = [
      {
        id: 1,
        name: 'Sara Lance',
        show: "DC's Legends of Tomorrow",
        gender: 'Female',
        sexuality: 'Bisexual',
        race: 'White',
        ethnicity: 'American',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://arrow.fandom.com/wiki/Sara_Lance',
        img_src: 'Sara_Lance.png'
      },
      {
        id: 2,
        name: 'Ava Sharpe',
        show: "DC's Legends of Tomorrow",
        gender: 'Female',
        sexuality: 'Lesbian',
        race: 'White',
        ethnicity: 'American',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://arrow.fandom.com/wiki/Ava_Sharpe',
        img_src: 'Ava_Sharpe.png'
      }
    ];

    return {characters};
  }
}
