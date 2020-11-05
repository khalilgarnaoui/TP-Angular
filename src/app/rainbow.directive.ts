import {Directive, HostBinding, HostListener} from '@angular/core';
import {style} from "@angular/animations";

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.color') color ;
  @HostBinding('style.borderColor') bdcolor ;
  // tslint:disable-next-line:typedef
  @HostListener('keyup') onKeyUp(){
    this.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6 ) ;
    this.bdcolor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6 ) ;
  }
  constructor() { }

}
