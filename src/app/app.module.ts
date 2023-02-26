import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemaMainComponent } from './components/tema-main/tema-main.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { TemasService } from './services/temas.service';
import { Temas } from './temas';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { ExposeElementDirective } from './components/tema-main/expose-element.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemaMainComponent,
    InitialPageComponent,
    PlayGameComponent,
    ExposeElementDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [Temas, ExposeElementDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
