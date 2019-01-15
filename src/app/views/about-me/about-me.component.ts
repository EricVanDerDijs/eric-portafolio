import { Component, Input, Renderer2, ElementRef } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { decoration1Anim, decoration2Anim, pictureAnim, textAnim } from './about-me.animations';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [ decoration1Anim, decoration2Anim, pictureAnim, textAnim ]
})
export class AboutMeComponent implements OnInit, OnChanges, OnDestroy {

  visibility: string = 'hidden';
  private scrollListener: Function;

  @Input() loadingState: string
  @Input() isMobile: boolean

  constructor(
    private util: UtilsService,
    private renderer: Renderer2,
    private el: ElementRef
    ) { }

  ngOnInit() {
    this.scrollListener = this.renderer
      .listen('window', 'scroll', this.displayContent );
  }

  ngOnChanges() {
    if(this.loadingState === 'loaded'){
      this.displayContent()
    }
  }

  ngOnDestroy() {
    this.scrollListener()
  }

  private displayContent = (): void => {
    const isVisible: boolean = this.util.isElementVisible(this.el.nativeElement);
    if( isVisible && this.visibility === 'hidden' ) {
      this.visibility = 'visible';
    }
  }

}