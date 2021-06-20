import { Injectable } from '@angular/core'
import { Game } from '../../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Game[] = [
    { id: 'smok', name: 'Smok' },
    { id: 'kosmos', name: 'Kosmos' }
  ];

  getGames(): Game[] {
    return this.games
  }

  getGame(id: string): Game {
    return this.games.filter((game) => game.id === id)[0]
  }
}
