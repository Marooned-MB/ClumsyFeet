import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { GamePickerComponent } from './screens/game-picker/game-picker.component'
import { ExpansionPickerComponent } from './screens/expansion-picker/expansion-picker.component'
import { GameDetailsComponent } from './screens/game-details/game-details.component'

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamePickerComponent },
  { path: 'game/:gameId', component: ExpansionPickerComponent },
  { path: 'game/:gameId/expansion/:expansion', component: GameDetailsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
