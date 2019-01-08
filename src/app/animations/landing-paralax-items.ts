import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const landingOneAnim = trigger('landing-one', [
    state('loading', style({
      transform: 'translateX(-60px) translateY(-60px) translateZ(1px) rotateZ(-25deg) skewX(-16deg)'
    })),
    state('loaded', style({
      transform: 'translateX(0) translateY(0) translateZ(30px) rotateZ(-25deg) skewX(-16deg)'
    })),
    transition('loading => loaded', [
      animate('0.9s ease')
    ])
  ]
)

export const landingOneShadowAnim = trigger('landing-one-shadow', [
    state('loading', style({
      transform: 'translateX(-60px) translateY(-60px) translateZ(0) rotateZ(-25deg) skewX(-16deg)',
      opacity: '.8'
    })),
    state('loaded', style({
      transform: 'translateX(0px) translateY(0px) translateZ(0) rotateZ(-25deg) skewX(-16deg)',
      opacity: '.4'
    })),
    transition('loading => loaded', [
      animate('0.9s ease')
    ])
  ]
)

export const landingTwoAnim = trigger('landing-two', [
    state('loading', style({
      transform: 'translateX(120px) translateY(-120px) translateZ(1px) rotateZ(24deg) skewX(-36deg)'
    })),
    state('loaded', style({
      transform: 'translateX(0) translateY(0) translateZ(50px) rotateZ(24deg) skewX(-36deg)'
    })),
    transition('loading => loaded', [
      animate('0.9s ease')
    ])
  ]
)

export const landingTwoShadowAnim = trigger('landing-two-shadow', [
    state('loading', style({
      transform: 'translateX(120px) translateY(-120px) translateZ(0) rotateZ(24deg) skewX(-36deg)',
      opacity: '.8'
    })),
    state('loaded', style({
      transform: 'translateX(0px) translateY(0px) translateZ(0) rotateZ(24deg) skewX(-36deg)',
      opacity: '.4'
    })),
    transition('loading => loaded', [
      animate('0.9s ease')
    ])
  ]
)

export const landingThreeAnim = trigger('landing-three', [
    state('loading', style({
      transform: 'translateX(-30px) translateY(30px) translateZ(1px) rotateZ(27deg) skewX(-36deg)'
    })),
    state('loaded', style({
      transform: 'translateX(0) translateY(0) translateZ(15px) rotateZ(27deg) skewX(-36deg)'
    })),
    transition('loading => loaded', [
      animate('0.9s ease')
    ])
  ]
)

export const landingThreeShadowAnim = trigger('landing-three-shadow', [
    state('loading', style({
      transform: 'translateX(-30px) translateY(30px) translateZ(0) rotateZ(27deg) skewX(-36deg)',
      opacity: '.8'
    })),
    state('loaded', style({
      transform: 'translateX(0px) translateY(0px) translateZ(0) rotateZ(27deg) skewX(-36deg)',
      opacity: '.4'
    })),
    transition('loading => loaded', [
      animate('0.9s ease')
    ])
  ]
)

export const landingFourAnim = trigger('landing-four', [
    state('loading', style({
      transform: 'translateX(60px) translateY(60px) translateZ(1px) rotateZ(-41deg) skewX(-21deg)'
    })),
    state('loaded', style({
      transform: 'translateX(0) translateY(0) translateZ(30px) rotateZ(-41deg) skewX(-21deg)'
    })),
    transition('loading => loaded', [
      animate('0.9s ease')
    ])
  ]
)

export const landingFourShadowAnim = trigger('landing-four-shadow', [
    state('loading', style({
      transform: 'translateX(60px) translateY(60px) translateZ(0) rotateZ(-41deg) skewX(-21deg)',
      opacity: '.8'
    })),
    state('loaded', style({
      transform: 'translateX(0px) translateY(0px) translateZ(0) rotateZ(-41deg) skewX(-21deg)',
      opacity: '.4'
    })),
    transition('loading => loaded', [
      animate('0.9s ease')
    ])
  ]
)

export const landingFiveAnim = trigger('landing-five', [
  state('loading', style({
    transform: 'translateX(160px) translateY(60px) translateZ(1px) rotateZ(-12deg) skewX(-21deg)'
  })),
  state('loaded', style({
    transform: 'translateX(0) translateY(0) translateZ(70px) rotateZ(-12deg) skewX(-21deg)'
  })),
  transition('loading => loaded', [
    animate('0.9s ease')
  ])
]
)

export const landingFiveShadowAnim = trigger('landing-five-shadow', [
  state('loading', style({
    transform: 'translateX(160px) translateY(60px) translateZ(0) rotateZ(-12deg) skewX(-21deg)',
    opacity: '.8'
  })),
  state('loaded', style({
    transform: 'translateX(0px) translateY(0px) translateZ(0) rotateZ(-12deg) skewX(-21deg)',
    opacity: '.4'
  })),
  transition('loading => loaded', [
    animate('0.9s ease')
  ])
]
)

export const landingTitle = trigger('landing-title', [
    state('loading', style({
      transform: 'translateY(-65%)',
      opacity: '0'
    })),
    state('loaded', style({
      transform: 'translateY(0)',
      opacity: '1'
    })),
    transition('loading => loaded', [
      animate('0.9s 0.9s ease-in-out')
    ])
  ]
)

