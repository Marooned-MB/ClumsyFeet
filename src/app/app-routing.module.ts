import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { GamePickerComponent } from './screens/game-picker/game-picker.component'
import { ExpansionPickerComponent } from './screens/expansion-picker/expansion-picker.component'

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamePickerComponent },
  { path: 'game/:id', component: ExpansionPickerComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
