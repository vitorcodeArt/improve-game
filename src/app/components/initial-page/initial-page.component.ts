import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  initialIsDead: boolean = false
  @Output() changeInitial: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  btn_click() {
    this.changeInitial.emit();
  }
}
