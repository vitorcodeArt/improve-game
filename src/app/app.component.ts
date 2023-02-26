import { Component, ViewChild, ElementRef } from '@angular/core';

import { Temas } from 'src/app/temas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


temasSelecionados: any = [];
heros: Temas[] = [
  { name: "Batman", url: "url" },
  { name: "Flash", url: "url" },
  { name: "Ciclópe", url: "url" },
  { name: "Xavier", url: "url" },
  { name: "Miranha", url: "url" },
  { name: "Mutano", url: "url" },
  { name: "Coringa", url: "url" },
  { name: "Lanterna Verde", url: "url" }
];

onTemaSelect() {

}

  isAlive: boolean = true
  initialIsDead = false

  onChangeAlive() {
    setTimeout(() => {
      this.isAlive = false
    }, 800);
  }


}
