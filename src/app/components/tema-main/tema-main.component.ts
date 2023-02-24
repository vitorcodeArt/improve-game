import { Component, Input, OnInit } from '@angular/core';

import { TemasService } from 'src/app/services/temas.service';
import { Temas } from 'src/app/temas';

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

  constructor(private temas: Temas) {

  }


  ngOnInit(): void {
  }

}
