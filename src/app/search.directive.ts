import { HostListener, Directive, ElementRef, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {

  constructor(private element: ElementRef) {
  }

  @Output() appSearch = new EventEmitter();
  @HostListener('keyup') Value() {
    return this.appSearch.emit(this.element.nativeElement.value);
  }

}
