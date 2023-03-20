import { Injectable, Directive, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { TemasPrimariosComponent } from '../components/temas-primario/temas-primarios.component';
import { TemasSecundariosComponent } from '../components/temas-secundarios/temas-secundarios.component';

@Injectable({
  providedIn: 'root'
})

export class TemasService {
  TemasPrimariosComponent!: TemasPrimariosComponent;
  TemasSecundariosComponent!: TemasSecundariosComponent;
  temasPrimarios: any;
  temasSecundarios: any;



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
