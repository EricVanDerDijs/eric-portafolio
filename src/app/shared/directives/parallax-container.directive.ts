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

  @Input('perspective') perspective = '4000px';
  @Input('xMaxRotation') xMaxRotation = 30;
  @Input('yMaxRotation') yMaxRotation = 20;

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
    this.halfWidth =  window.innerWidth / 2;
    this.halfHeight =  window.innerHeight / 2;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    const topOffset = event.currentTarget.parentElement.getBoundingClientRect().top

    let yMousePos = this.halfHeight - (event.clientY - topOffset)
    yMousePos = yMousePos > this.halfHeight ? this.halfHeight : yMousePos

    let xMousePos = event.clientX - this.halfWidth
    xMousePos = xMousePos > this.halfWidth ? this.halfWidth : xMousePos
    
    const xRotation = ( yMousePos / this.halfHeight ) * this.xMaxRotation;
    this.yRotation = ( xMousePos / this.halfWidth ) * this.yMaxRotation;
    
    window.requestAnimationFrame( () => {
      this.setRotation(xRotation, this.yRotation);
    })
  }

  onScroll = (event: any): void => {
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
