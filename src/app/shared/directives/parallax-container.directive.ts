import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[djkParallaxContainer]'
})
export class ParallaxContainerDirective implements OnInit, AfterViewInit, OnDestroy {

  constructor(private el: ElementRef) { }

  private halfWidth: number;
  private halfHeight: number;
  private yRotation: number = 0;

  @Input() perspective = '4000px';
  @Input() xMaxRotation = 30;
  @Input() yMaxRotation = 20;

  ngOnInit() {    
    // set initial screen dimensions & add 'rezise' listener
    this.setDimensions();
    window.addEventListener('scroll', this.onScroll );
    window.addEventListener('resize', this.setDimensions );
  }

  ngAfterViewInit() {
    // set initial styles
    this.el.nativeElement.style.perspective = this.perspective
    this.el.nativeElement.style.transformStyle = "preserve-3d"
    this.el.nativeElement.style.position = "relative"
    // set initial rotation
    this.setScrollRotation()
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll );
    window.removeEventListener('resize', this.setDimensions );
  }

  setDimensions = ():void => {
    this.halfWidth =  ( window.innerWidth ) / 2;
    this.halfHeight =  ( window.innerHeight ) / 2;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    const boundings = this.el.nativeElement.parentElement.getBoundingClientRect()

    let yMousePos = this.halfHeight + (boundings.top / 2) - event.clientY
    yMousePos = Math.abs(yMousePos / this.halfHeight) > 1 ? this.halfHeight : yMousePos
    const xRotation = ( yMousePos / this.halfHeight ) * this.xMaxRotation;

    let xMousePos = event.clientX - this.halfWidth - (boundings.left / 2)
    xMousePos = Math.abs(xMousePos / (this.halfWidth - (boundings.left / 2) )) > 1 ? this.halfWidth : xMousePos
    this.yRotation = ( xMousePos / ( this.halfWidth - (boundings.left / 2) ) ) * this.yMaxRotation;

    window.requestAnimationFrame( () => {
      this.setRotation(xRotation, this.yRotation);
    })
  }

  onScroll = (): void => {
    window.requestAnimationFrame( () => {
      this.setScrollRotation()
    }) 
  }

  setScrollRotation = (): void => {
    let limitedTopOffset = this.el.nativeElement.parentElement.getBoundingClientRect().top
    if( Math.abs( limitedTopOffset ) > this.halfHeight ){
      limitedTopOffset = this.halfHeight * Math.sign(limitedTopOffset)
    }
    const xRotation = ( limitedTopOffset / this.halfHeight ) * this.xMaxRotation
    this.setRotation(xRotation, this.yRotation)
  }

  setRotation = (xRotation: number, yRotation: number):void => {
    if(typeof xRotation === 'number' && typeof yRotation === 'number'){
      const rotateStyle = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      this.el.nativeElement.style.transform = rotateStyle
    }
  }
}
