import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';

import { Temas } from 'src/app/temas';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-tema-main',
  templateUrl: './tema-main.component.html',
  styleUrls: ['./tema-main.component.css']
})
export class TemaMainComponent implements OnInit, AfterViewInit {

  @Input() photoCover: string = ""
  @Input() titleTema: string = ""
  @Input() color: any = ""
  @Input() temaSelect: boolean = false

  clickTema() {
    this.temaSelect = !this.temaSelect
  }

  @ViewChild('temaElement', { static: false })
  elementRef!: ElementRef;

  constructor(private temasService: TemasService) { }


  ngAfterViewInit() {
    this.temasService.elementRef = this.elementRef;
  }


  personSelect: number = NaN
  temasSelecionados: any = [];

  heros: Temas[] = [
    { name: "Aquaman", url: "url" },
    { name: "Batman", url: "url" },
    { name: "Bolsonaro", url: "url" },
    { name: "Charada", url: "url" },
    { name: "Ciclópe", url: "url" },
    { name: "Coringa", url: "url" },
    { name: "Duas caras", url: "url" },
    { name: "Demolidor", url: "url" },
    { name: "Duende Verde", url: "url" },
    { name: "Flash", url: "url" },
    { name: "Homem-Aranha", url: "url" },
    { name: "Hulk", url: "url" },
    { name: "Mutano", url: "url" },
    { name: "Lanterna Verde", url: "url" },
    { name: "Lex Luthor", url: "url" },
    { name: "Loki", url: "url" },
    { name: "Lula", url: "url" },
    { name: "Pinguim", url: "url" },
    { name: "Superman", url: "url" },
    { name: "Super Shock", url: "url" },
    { name: "Robin", url: "url" },
    { name: "Thanos", url: "url" },
    { name: "Thor", url: "url" },
    { name: "Venom", url: "url" },
    { name: "Xavier", url: "url" },

  ];

  onClickHero(event: Event) {
    this.temasService.emitirClique(event)

    // if ( this.temaElement.nativeElement.style.backgroundColor == 'transparent') {
    //   this.temasSelecionados.push(this.heros)
      // console.log(this.temasSelecionados[0]);

      // this.personSelect = Math.floor(Math.random() * this.temasSelecionados[0].length)
      // console.log(this.personSelect);
      // console.log(this.temasSelecionados[0][this.personSelect]);
    // } else {
      // this.temasSelecionados.pop(this.heros)
      // console.log(this.temasSelecionados);
    // }

    // return this.temaElement
  }

  onTemaSelect() {

  }



  ngOnInit(): void {

  }

}
