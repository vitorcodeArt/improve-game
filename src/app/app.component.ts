import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onTemaSelect() {
throw new Error('Method not implemented.');
}

  isAlive: boolean = true
  initialIsDead = false

  onChangeAlive() {
    setTimeout(() => {
      this.isAlive = false
    }, 800);
  }


}
