import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

import { Temas } from 'src/app/temas';
import { TemasService } from 'src/app/services/temas.service';
import { TemaMainComponent } from '../tema-main/tema-main.component';
import { config, Subscriber } from 'rxjs';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {


  @ViewChild('config1')
  config1!: ElementRef;

  @ViewChild('inputConteiner')
  inputConteiner!: ElementRef;

  @ViewChild('buttonConfig1')
  buttonConfig1!: ElementRef;


  ngOnInit() {

  }

  viewImage() {
    this.config1.nativeElement.checked = !this.config1.nativeElement.checked
    
    
    if (this.config1.nativeElement.checked == true) {
      this.buttonConfig1.nativeElement.style.background = "#0f0"
      this.buttonConfig1.nativeElement.style.transform = "translate3d(100%,0,0)"
      
      
    } else {
      this.buttonConfig1.nativeElement.style.background = "#f00"
      this.buttonConfig1.nativeElement.style.transform = "translate3d(0,0,0)"
    }
    
  }

  @Input() temaMainComponent!: TemaMainComponent;


  
  personSelect: number = NaN
  temaSelect: number = NaN
  temasSelecionados: any = [];

  nomePersonagem: string = "?"
  photoCover: string = ""
  temaRound: string = "?"


  constructor(private temasService: TemasService) { 
    this.temasService.getClique().subscribe((info) => {

      this.temasSelecionados = temasService.temasSelecionados
      console.log(this.temasSelecionados);
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



  /*---------------------- Temas -----------------------*/



}
