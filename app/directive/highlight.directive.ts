import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() highlight: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.highlight) {
      this.el.nativeElement.style.backgroundColor = '#4169E1';
    } else {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }
}