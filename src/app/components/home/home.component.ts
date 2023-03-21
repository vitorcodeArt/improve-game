import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('conteiner') conteiner: any;


  @Input() titulo: string = ""
  @Input() description: string = ""
  @Input() color: any = ""
  @Input() photo: string = ""

  isDisappear: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() changeAlive: EventEmitter<any> = new EventEmitter()

  handleClick() {
    this.changeAlive.emit();
    this.isDisappear = true
    console.log(this.isDisappear);
  }
}
