import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemasPrimariosComponent } from './components/temas-primario/temas-primarios.component';
import { TemasSecundariosComponent } from './components/temas-secundarios/temas-secundarios.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { TemasService } from './services/temas.service';
import { Temas } from './temas';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { JokingHazardComponent } from './components/games/joking-hazard/joking-hazard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemasPrimariosComponent,
    TemasSecundariosComponent,
    InitialPageComponent,
    PlayGameComponent,
    NavBarComponent,
    JokingHazardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [Temas],
  bootstrap: [AppComponent]
})
export class AppModule { }
