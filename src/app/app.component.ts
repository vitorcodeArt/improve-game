import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAlive: boolean = true

  onChangeAlive() {
    setTimeout(() => {
      this.isAlive = false
    }, 2000);

  }
}
