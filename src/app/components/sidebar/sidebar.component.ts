import { Component, ElementRef, Renderer2, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { sidebarAnim, sidebarButtonAnim } from './sidebar.animations'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [ sidebarAnim, sidebarButtonAnim ]
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  private requiredOffset: number = window.innerHeight * .75;
  private scrollListener: Function;
  visibility: string = 'hidden'
  buttonVisibility: string = 'hidden'

  @Input() loadingState: string
  @Input() isMobile: boolean
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // add scroll listener and save it
    this.scrollListener =  this.renderer
    .listen('window', 'scroll', () => {
      
          const topOffset = this.el.nativeElement.getBoundingClientRect().top * -1
          
          if(this.isMobile){
            if(topOffset >= this.requiredOffset && this.buttonVisibility === 'hidden'){
              this.toggleButtonVisibility()
            }
            if(topOffset < this.requiredOffset && this.buttonVisibility === 'visible'){
              this.toggleButtonVisibility()
            }  
          } else {
            if(topOffset >= this.requiredOffset && this.visibility === 'hidden'){
              this.toggleVisibility()
            }
            if(topOffset < this.requiredOffset && this.visibility === 'visible'){
              this.toggleVisibility()
            }
          }

      })
  }

  ngAfterViewInit() {
      
      const topOffset = this.el.nativeElement.getBoundingClientRect()
      if(this.loadingState === 'loaded' && topOffset >= this.requiredOffset){
        this.isMobile ? this.toggleButtonVisibility() : this.toggleVisibility()
      }
  }

  ngOnDestroy() {
    // remove scroll listener
    this.scrollListener()
  }
  
  scroll = (event: any): void => {
    event.preventDefault();
    const targetHash = event.currentTarget.getAttribute('href')
    if(this.isMobile){
      this.toggleVisibility()

      setTimeout(() => {
        document.querySelector(targetHash).scrollIntoView({ behavior: 'smooth' })
      }, 800);

    } else {
      document.querySelector(targetHash).scrollIntoView({ behavior: 'smooth' })
    }
  }

  toggleVisibility = ():void => {
    this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden'
  }

  toggleButtonVisibility = (): void => {
    this.buttonVisibility = this.buttonVisibility === 'hidden' ? 'visible' : 'hidden'
  }

}
