import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExposeElement]'
})
export class ExposeElementDirective {

  constructor(private elementRef: ElementRef) { }

  getElement() {
    return this.elementRef.nativeElement;
  }

}
