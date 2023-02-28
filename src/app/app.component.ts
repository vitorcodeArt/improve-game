import { Component, ViewChild, ElementRef } from '@angular/core';

import { Temas } from 'src/app/temas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  isAlive: boolean = true
  initialIsDead = false

  onChangeAlive() {
    setTimeout(() => {
      this.isAlive = false
    }, 800);
  }


}
