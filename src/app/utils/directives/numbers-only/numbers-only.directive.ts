import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const e = <KeyboardEvent>event;
    if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 46 || e.keyCode === 190 || (e.keyCode >= 35 && e.keyCode <= 40)) {
      return;
    }
    if (e.keyCode < 48 || e.keyCode > 57) {
      e.preventDefault();
    }
  }

}
