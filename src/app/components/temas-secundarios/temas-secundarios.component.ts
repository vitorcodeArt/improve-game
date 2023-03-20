import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter, QueryList } from '@angular/core';

import { gsap } from 'gsap-trial';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-temas-secundarios',
  templateUrl: './temas-secundarios.component.html',
  styleUrls: ['./temas-secundarios.component.css']
})
export class TemasSecundariosComponent implements OnInit, AfterViewInit {

  @Input() inputs!: QueryList<ElementRef>;

  @ViewChild('sectionElement') sectionElement!: ElementRef;
  @ViewChild('img') img!: ElementRef;
  @ViewChild('description') description!: ElementRef;

  ngAfterViewInit() {
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
    this.temasService.TemasSecundariosComponent = this;
  }

  personSelect: number = NaN
  temasSelecionados: any = [];
}
