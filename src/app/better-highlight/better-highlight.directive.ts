import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultBackground: string = 'transparent';
  @Input() highlightBackground: string = 'rgb(0, 132, 255)';
  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultBackground;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgb(0, 132, 255)');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    this.backgroundColor = this.highlightBackground;
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

    this.backgroundColor = this.defaultBackground;
    this.color = this.defaultColor;
  }

}
