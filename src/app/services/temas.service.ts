import { Injectable, Directive, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { TemaMainComponent } from '../components/tema-main/tema-main.component';

@Injectable({
  providedIn: 'root'
})

export class TemasService {
  TemaMainComponent!: TemaMainComponent;
  temasSelecionados: any;

  
   
  constructor() { }

  public elementRef!: ElementRef;

  temaElement!: HTMLElement;

  setMyElement(element: HTMLElement) {
    this.temaElement = element;
  }

  private cliqueSubject = new Subject<Event>;

  emitirClique(event: Event) {
    this.cliqueSubject.next(event)
  }
  getClique() {
    return this.cliqueSubject.asObservable();
  }

}
