import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor :string ='transparent';
  @Input() highlightColor:string ='blue' 
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor( private elemRef : ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter')mouseover(evenData: Event){
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave')mouseleave(evenData: Event){
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor =this.defaultColor;
  }
}