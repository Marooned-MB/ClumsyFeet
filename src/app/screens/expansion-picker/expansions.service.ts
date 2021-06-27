import { Injectable } from '@angular/core'
import { Game } from '~/app/models/game.model';
import { Expansion } from '../../models/expansion.model';

@Injectable({
  providedIn: 'root',
})
export class ExpansionsService {
  private expansions: Expansion[] = [
    { gameId: 'smok', id: 'base', name: 'Podstawka' },
    { gameId: 'smok', id: 'malpy', name: 'Małpi Król' },
    { gameId: 'kosmos', id: '', name: 'Kosmos' }
  ];

  getExpansions(gameId: Game['id']): Expansion[] {
    return this.expansions.filter(exp => exp.gameId === gameId);
  }

  getExpansion(id: string): Expansion {
    return this.expansions.filter((expansion) => expansion.id === id)[0];
  }
}
