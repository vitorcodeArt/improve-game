import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Temas } from 'src/app/temas';
import { TemasService } from 'src/app/services/temas.service';
import { ExposeElementDirective } from '../tema-main/expose-element.directive';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
  private temaElement!: HTMLElement;

  component: boolean = false

  personSelect: number = NaN
  temaSelect: number = NaN
  temasSelecionados: any = [];

  clickInfo: any;

  nomePersonagem: string = ""
  photoCover: string = ""
  tema: string = ""


  constructor(private temasService: TemasService, private exposeElementDirective: ExposeElementDirective) {
    this.temasService.getCliqueObservable().subscribe((info) => {

      if ( this.temasService.elementRef.nativeElement.style.backgroundColor == 'transparent') {
      this.temasSelecionados.push(this.heros)


    } else {
      this.temasSelecionados.pop(this.heros)
    }
    })
  }

  nextWork() {
    this.temaSelect = Math.floor(Math.random() * this.temasSelecionados.length)
    this.personSelect = Math.floor(Math.random() * this.temasSelecionados[this.temaSelect].length)
    this.nomePersonagem = (this.temasSelecionados[this.temaSelect][this.personSelect].name);
    this.photoCover = (this.temasSelecionados[this.temaSelect][this.personSelect].url);
    // this.temasSelecionados[0].pop(this.temasSelecionados[0][this.personSelect]);

  }

  initTimer() {

  }

  ngOnInit() {
    this.temaElement = this.exposeElementDirective.getElement();
    this.temasService.setMyElement(this.temaElement);
  }

  heros: Temas[] = [
    { name: "Aquaman", url: "../../../assets/img/aquaman.png" },
    { name: "Batman", url: "../../../assets/img/batman.png" },
    { name: "Bolsonaro", url: "../../../assets/img/bolsonaro.png" },
    { name: "Charada", url: "../../../assets/img/charada.png" },
    { name: "Coringa", url: "../../../assets/img/coringa.png" },
    // { name: "Ciclópe", url: "url" },
    // { name: "Duas caras", url: "url" },
    // { name: "Demolidor", url: "url" },
    // { name: "Duende Verde", url: "url" },
    // { name: "Flash", url: "url" },
    // { name: "Homem-Aranha", url: "url" },
    // { name: "Hulk", url: "url" },
    // { name: "Mutano", url: "url" },
    // { name: "Lanterna Verde", url: "url" },
    // { name: "Lex Luthor", url: "url" },
    // { name: "Loki", url: "url" },
    // { name: "Lula", url: "url" },
    // { name: "Pinguim", url: "url" },
    // { name: "Superman", url: "url" },
    // { name: "Super Shock", url: "url" },
    // { name: "Robin", url: "url" },
    // { name: "Thanos", url: "url" },
    // { name: "Thor", url: "url" },
    // { name: "Venom", url: "url" },
    // { name: "Xavier", url: "url" },


  ];

}
