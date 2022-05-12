import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Productcard]'
})
export class ProductcardDirective {
  @Input("Productcard") cardcolor:string="red";
  @Input() defaultcardcolor:string="blue";

   private elemRef:ElementRef;
  constructor(elemRef:ElementRef) {
    this.elemRef=elemRef;
    elemRef.nativeElement.style.boxShadow="8px 8px 8px 8px rgba(210,105,30,1) ";
  }
 @HostListener('mouseenter') onMouseEnter(){
   this.elemRef.nativeElement.style.border="3px blue solid";
   this.elemRef.nativeElement.style.boxShadow="8px 8px 8px 8px rgba(210,105,30,1) ";

// this.elemRef.nativeElement.style="box-shadow:15px 15px 15px 15px rgba(300,200,40,0.0) red";
  }
 @HostListener('mouseout') onMouseOut(){
  this.elemRef.nativeElement.style.border="1px red solid"

    // this.elemRef.nativeElement.style="box-shadow:8px 8px 8px 8px rgba(210,105,30,0.0) red";

  }

}
