import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema-main',
  templateUrl: './tema-main.component.html',
  styleUrls: ['./tema-main.component.css']
})
export class TemaMainComponent implements OnInit {

  @Input() photoCover: string = ""
  @Input() titleTema: string = ""

  @Input() color: any = ""

  @Input() temaSelect: boolean = false




  clickTema() {
    this.temaSelect = !this.temaSelect
  }

  constructor() {

    console.log(this.temas.herois);

  }

  temas: any = {
    herois: [
      [
        "Batman",
        "urlPhoto"
      ],
      [
        "Flash",
        "urlPhoto"
      ],
      [
        "Miranha",
        "urlPhoto"
      ]
    ]
  };



  ngOnInit(): void {
  }

}
