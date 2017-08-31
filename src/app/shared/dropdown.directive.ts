import { Directive, HostListener, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective implements OnInit {
  private clicked = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {}
  @HostListener('click') mouseClicked(eventData: Event) {
    if (!this.clicked) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
      this.clicked = true;
      return;
    }
    this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    this.clicked = false;
  }

}
