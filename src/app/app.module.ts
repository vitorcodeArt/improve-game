import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemaMainComponent } from './components/tema-main/tema-main.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { TemasService } from './services/temas.service';
import { Temas } from './temas';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemaMainComponent,
    InitialPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Temas],
  bootstrap: [AppComponent]
})
export class AppModule { }
