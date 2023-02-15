import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TemaMainComponent } from './components/tema-main/tema-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemaMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
