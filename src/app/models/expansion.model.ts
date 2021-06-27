import { Game } from "./game.model";

export interface Expansion {
  gameId: Game['id'];
  id: string;
  name: string;
}