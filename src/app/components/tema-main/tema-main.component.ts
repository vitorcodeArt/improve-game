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
  @Input() id: string = "";
  @Input() temaSelect: boolean = false

  clickTema() {
    this.temaSelect = !this.temaSelect
  }

  @ViewChild('temaElement', { static: false })
  elementRef!: ElementRef;

  constructor(private temasService: TemasService) { }


  ngAfterViewInit() {
    this.temasService.elementRef = this.elementRef;
    console.log(this.temasService.elementRef.nativeElement.id);
  }


  personSelect: number = NaN
  temasSelecionados: any = [];

  onClickHero(event: Event) {
    this.temasService.emitirClique(event)
  }



  ngOnInit(): void {

  }

}
