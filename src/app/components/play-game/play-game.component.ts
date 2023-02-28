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

  nomePersonagem: string = "?"
  photoCover: string = "../../../assets/img/aquaman.png"
  temaRound: string = "?"


  constructor(private temasService: TemasService, private exposeElementDirective: ExposeElementDirective) {
    this.temasService.getCliqueObservable().subscribe((info) => {
      console.log(this.temasService.elementRef.nativeElement.id);

      if ( this.temasService.elementRef.nativeElement.value == 'Heroes/Vilões') {
      this.temasSelecionados.push(this.heros)
      console.log(this.temasSelecionados);



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
    this.temaRound = (this.temasSelecionados[this.temaSelect][this.personSelect].tema);
    // this.temasSelecionados[0].pop(this.temasSelecionados[0][this.personSelect]);
    this.carga = 100
    this.stopTimer()

  }

  @ViewChild('progressBar')
  progressBar!: ElementRef;
  carga: number = 100;
  time: number = 900;
  intervalRef: any;

  initTimer() {
    this.intervalRef = setInterval(() => {
        this.progressBar.nativeElement.style.width = this.carga + "%";
        this.carga--
        console.log(this.carga);

    if (this.carga <= 15) {
      this.progressBar.nativeElement.style.background = "#f00"
      }
      if (this.carga <= 0) {
      this.stopTimer()
    }
    },this.time)



}
stopTimer() {
  clearInterval(this.intervalRef)
}

  ngOnInit() {
    this.temaElement = this.exposeElementDirective.getElement();
    this.temasService.setMyElement(this.temaElement);
  }

  heros: Temas[] = [
    { name: "Aquaman", url: "../../../assets/img/aquaman.png", tema: "Herói" },
    { name: "Batman", url: "../../../assets/img/batman.png", tema: "Herói" },
    { name: "Bolsonaro", url: "../../../assets/img/bolsonaro.png", tema: "Herói" },
    { name: "Charada", url: "../../../assets/img/charada.png", tema: "Herói" },
    { name: "Coringa", url: "../../../assets/img/coringa.png", tema: "Herói" },
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
  objects: Temas[] = [
    { name: "Aquaman", url: "../../../assets/img/aquaman.png", tema: "Herói" },
    { name: "Batman", url: "../../../assets/img/batman.png", tema: "Herói" },
    { name: "Bolsonaro", url: "../../../assets/img/bolsonaro.png", tema: "Herói" },
    { name: "Charada", url: "../../../assets/img/charada.png", tema: "Herói" },
    { name: "Coringa", url: "../../../assets/img/coringa.png", tema: "Herói" },
  ]


}
