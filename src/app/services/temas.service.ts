import { Injectable, Directive, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Directive({
  selector: '[appExposeElement]'
})

export class TemasService {

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

  getCliqueObservable() {
    return this.cliqueSubject.asObservable();
  }



}
