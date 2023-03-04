import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter, QueryList } from '@angular/core';

import { Temas } from 'src/app/temas';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-tema-main',
  templateUrl: './tema-main.component.html',
  styleUrls: ['./tema-main.component.css']
})
export class TemaMainComponent implements OnInit, AfterViewInit {

  @Input() inputs!: QueryList<ElementRef>;

  AfterViewInit() {

  }

  @Input() photoCover: string = ""
  @Input() titleTema: string = ""
  @Input() color: any = ""
  @Input() id: string = "";
  @Input() temaSelect: boolean = false

  clickTema() {
    this.temaSelect = !this.temaSelect
  }

  constructor(private temasService: TemasService) { }

  ngOnInit() {
    this.temasService.TemaMainComponent = this;    
  }

  ngAfterViewInit() {

  }
  personSelect: number = NaN
  temasSelecionados: any = [];


}
