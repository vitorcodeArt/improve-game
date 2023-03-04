
import { Component, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { TemasService } from 'src/app/services/temas.service';
import { TemaMainComponent } from './components/tema-main/tema-main.component';

import { Temas } from 'src/app/temas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private temasService: TemasService) {}

  @ViewChildren('tema1, tema2, tema3')
  inputs!: QueryList<ElementRef>;


  @ViewChild('tema1') tema1!: ElementRef;
  @ViewChild('tema2') tema2!: ElementRef;

onClickHero() {
  if ( this.tema1.nativeElement.checked == false) {
    this.temasSelecionados.push(this.heros)
    
    console.log(this.temasSelecionados);
  } else {
    this.temasSelecionados.pop(this.heros)
  }     
}
  onClickObject() {
    if ( this.tema2.nativeElement.checked == false) {

      this.temasSelecionados.push(this.objects)
      console.log(this.temasSelecionados);
    } else {
      this.temasSelecionados.pop(this.objects)
    }      
  }

  finishSelect(temasSelecionados: any) {
      this.temasService.temasSelecionados = this.temasSelecionados;
      this.temasService.emitirClique(temasSelecionados);

  }

  TemaHeroComponent: any;


  ngOnInit() {
    this.TemaHeroComponent = this.temasService.TemaMainComponent;   
    
    
  }



  personSelect: number = NaN
  temaSelect: number = NaN
  temasSelecionados: any = [];


  isAlive: boolean = true
  initialIsDead = false

  onChangeAlive() {
    setTimeout(() => {
      this.isAlive = false
    }, 800);
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
    { name: "Caneca", url: "../../../assets/img/aquaman.png", tema: "Objetos" },
    { name: "Livro", url: "../../../assets/img/batman.png", tema: "Objetos" },
    { name: "Mouse", url: "../../../assets/img/bolsonaro.png", tema: "Objetos" },
    { name: "Geladeira", url: "../../../assets/img/charada.png", tema: "Objetos" },
    { name: "Relógio", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Fone de ouvido", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Lápis", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Colher", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Escova de dentes", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Sabonete", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Celular", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Quadro", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Chave", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Bolsa", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Tesoura", url: "../../../assets/img/coringa.png", tema: "Objetos" },
    { name: "Relógio", url: "../../../assets/img/coringa.png", tema: "Objetos" },
  ]


}
