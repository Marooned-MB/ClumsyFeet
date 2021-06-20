import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { GamePickerComponent } from './screens/game-picker/game-picker.component'
import { GamesService } from './screens/game-picker/games.service'
import { ExpansionPickerComponent } from './screens/expansion-picker/expansion-picker.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, GamePickerComponent, ExpansionPickerComponent],
  providers: [GamesService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
