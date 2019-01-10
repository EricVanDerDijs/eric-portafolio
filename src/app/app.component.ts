import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  private loadListener: Function
  private resizeListener: Function
  loadingState: string = 'loading';
  isMobile: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.loadListener = this.renderer
      .listen('window', 'load', this.setLoadedState )
    
    this.setViewType()
    this.resizeListener = this.renderer
      .listen('window', 'resize', this.setViewType )
  }

  ngOnDestroy(){
    this.loadListener()
    this.resizeListener()
  }

  private setViewType = (): void => {
    if(window.innerWidth < 992){
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }

  private setLoadedState = (): void => {
    this.loadingState = 'loaded'
  }

}
