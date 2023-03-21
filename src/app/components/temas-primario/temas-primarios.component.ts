import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter, QueryList } from '@angular/core';

import { gsap } from 'gsap-trial';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-temas-primarios',
  templateUrl: './temas-primarios.component.html',
  styleUrls: ['./temas-primarios.component.css']
})
export class TemasPrimariosComponent implements OnInit {

  @Input() inputs!: QueryList<ElementRef>;

  @ViewChild('sectionElement') sectionElement!: ElementRef;
  @ViewChild('img') img!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('qntdPalavras') Palavras!: ElementRef;



  @Input() photoCover: string = ""
  @Input() titleTema: string = ""
  @Input() qntsPalavras: string = ""
  @Input() color: any = ""
  @Input() id: string = "";
  @Input() temaSelect: boolean = false

  clickTema() {
    this.temaSelect = !this.temaSelect
  }

  constructor(private temasService: TemasService) { }

  ngOnInit() {
    this.temasService.TemasPrimariosComponent = this;
  }

  personSelect: number = NaN
  temasSelecionados: any = [];

}
