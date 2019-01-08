import { Component, OnInit } from '@angular/core';
import { 
  landingOneAnim, landingOneShadowAnim,
  landingTwoAnim, landingTwoShadowAnim,
  landingThreeAnim, landingThreeShadowAnim,
  landingFourAnim, landingFourShadowAnim,
  landingFiveAnim, landingFiveShadowAnim
 } from 'src/app/animations/landing-paralax-items'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    landingOneAnim, landingOneShadowAnim,
    landingTwoAnim, landingTwoShadowAnim,
    landingThreeAnim, landingThreeShadowAnim,
    landingFourAnim, landingFourShadowAnim,
    landingFiveAnim, landingFiveShadowAnim
  ]
})
export class AppComponent implements OnInit{
  
  loadingState: string = 'loading';

  constructor() { }

  ngOnInit() {
    window.addEventListener('load', this.setLoadedState )
  }

  setLoadedState = (): void => {
    this.loadingState = 'loaded'
  }

}
