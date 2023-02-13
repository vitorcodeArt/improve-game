import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() changeAlive: 
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    console.log('Mudou o número');

  }
}
