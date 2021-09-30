import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'rgb(68, 170, 82)';
        this.elementRef.nativeElement.style.color = 'white';
    }
}
