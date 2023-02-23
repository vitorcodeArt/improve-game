import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() changeAlive: EventEmitter<any> = new EventEmitter()
  @ViewChild('conteiner') conteiner: any;

  
  isDisappear: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.changeAlive.emit();
    this.isDisappear = true
    console.log(this.isDisappear);
    
  }
}
