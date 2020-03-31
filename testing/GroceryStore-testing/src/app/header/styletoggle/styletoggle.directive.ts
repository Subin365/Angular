import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyletoggle]'
})
export class StyletoggleDirective {
  @HostBinding('class.open') open = false;

  @HostListener('click') toggleOpen(){
    this.open = !this.open;
  }
}
