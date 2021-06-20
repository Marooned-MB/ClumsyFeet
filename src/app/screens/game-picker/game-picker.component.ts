import { Component, OnInit } from '@angular/core'
import { Game } from '../../models/game.model';
import { GamesService } from './games.service';

@Component({
  selector: 'cf-game-picker',
  templateUrl: './game-picker.component.html',
})
export class GamePickerComponent implements OnInit {
  games: Game[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }
}
