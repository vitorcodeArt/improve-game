import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

import { Temas } from 'src/app/temas';
import { TemasService } from 'src/app/services/temas.service';
import { TemasPrimariosComponent } from '../temas-primario/temas-primarios.component';
import { TemasSecundariosComponent } from '../temas-secundarios/temas-secundarios.component';
import { config, Subscriber } from 'rxjs';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  ngOnInit() {

  }

  @Input() TemasPrimariosComponent!: TemasPrimariosComponent;

  @Input() TemasSecundariosComponent!: TemasSecundariosComponent;

  temaSelect: number = NaN // puxar tema aleatório
  personSelect: number = NaN // puxar personagem aleatório
  temaSecundarioSelect: number = NaN // puxar tema aleatório
  personSecundarioSelect: number = NaN // puxar personagem aleatório

  temasPrimarios: any = [];
  temasSecundarios: any = [];

  palavraSecundaria: string = ""
  palavraPrimaria: string = ""
  photoCover: string = ""
  temaRound: string = ""


  constructor(private temasService: TemasService) {
    this.temasService.getClique().subscribe((info) => {

      this.temasPrimarios = temasService.temasPrimarios
      this.temasSecundarios = temasService.temasSecundarios
      console.log(this.temasPrimarios);
      console.log(this.temasSecundarios);
    })

   }



  //  gerar próxima palavra
  nextWork() {
    this.temaSelect = Math.floor(Math.random() * this.temasPrimarios.length)
    this.personSelect = Math.floor(Math.random() * this.temasPrimarios[this.temaSelect].length)

    this.palavraPrimaria = (this.temasPrimarios[this.temaSelect][this.personSelect].name);
    this.photoCover = (this.temasPrimarios[this.temaSelect][this.personSelect].url);
    this.temaRound = (this.temasPrimarios[this.temaSelect][this.personSelect].tema);


    console.log(this.temaSelect);
    console.log(this.personSelect);

    this.temasPrimarios[this.temaSelect].splice(this.personSelect, 1);

    // this.temasPrimarios[this.temaSelect].pop(this.temasPrimarios[this.personSelect]);

    console.log(this.temasPrimarios[this.temaSelect]);

    this.temaSecundarioSelect = Math.floor(Math.random() * this.temasSecundarios.length)
    this.personSecundarioSelect = Math.floor(Math.random() * this.temasSecundarios[this.temaSecundarioSelect].length)

    this.palavraSecundaria = (this.temasSecundarios[this.temaSecundarioSelect][this.personSecundarioSelect].name);

  }




  /*-------------------------------- Progress-Bar ---------------------------------------*/
  @ViewChild('progressBar')
  progressBar!: ElementRef;
  carga: number = 100;
  time: number = 200;
  intervalRef: any;

  initTimer() {
    this.intervalRef = setInterval(() => {
        this.progressBar.nativeElement.style.width = this.carga + "%";
        this.carga--

    if (this.carga <= 15) {
      this.progressBar.nativeElement.style.background = "#f00"
    } else {
      this.progressBar.nativeElement.style.background = "#0f0"
    }
      if (this.carga <= 0) {
      this.stopTimer()
      this.carga = 100
    }
    },this.time)
}
  stopTimer() {
    clearInterval(this.intervalRef)
  }




  // configurações de jogo
  viewPhoto: any;

  @ViewChild('config1')
  config1!: ElementRef;

  @ViewChild('inputConteiner')
  inputConteiner!: ElementRef;

  @ViewChild('buttonConfig1')
  buttonConfig1!: ElementRef;



  viewImage() {
    this.config1.nativeElement.checked = !this.config1.nativeElement.checked


    if (this.config1.nativeElement.checked == true) {
      this.buttonConfig1.nativeElement.style.background = "#0f0"
      this.buttonConfig1.nativeElement.style.transform = "translate3d(100%,0,0)"
      this.viewPhoto = true;


    } else {
      this.buttonConfig1.nativeElement.style.background = "#f00"
      this.buttonConfig1.nativeElement.style.transform = "translate3d(0,0,0)"
      this.viewPhoto = false;

    }
  }

}

