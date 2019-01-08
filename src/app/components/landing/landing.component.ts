import { Component, Input } from '@angular/core';
import { 
  landingOneAnim, landingOneShadowAnim,
  landingTwoAnim, landingTwoShadowAnim,
  landingThreeAnim, landingThreeShadowAnim,
  landingFourAnim, landingFourShadowAnim,
  landingFiveAnim, landingFiveShadowAnim,
  landingTitle
 } from 'src/app/animations/landing-paralax-items'
 
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    landingOneAnim, landingOneShadowAnim,
    landingTwoAnim, landingTwoShadowAnim,
    landingThreeAnim, landingThreeShadowAnim,
    landingFourAnim, landingFourShadowAnim,
    landingFiveAnim, landingFiveShadowAnim,
    landingTitle
  ]
})
export class LandingComponent {
  
  @Input() loadingState: string 

  constructor() { }

}
