import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild,
  group
} from '@angular/animations';

export const decoration1Anim = trigger('decoration1', [
  state('hidden', style({
    transform: 'translateX(250%) skewX(45deg) rotateZ(45deg)'
  })),
  state('visible', style({
    transform: 'translateX(0) skewX(45deg) rotateZ(45deg)'
  })),
  transition('hidden => visible', [
      group([
        animate('1s .5s ease'),
        query('.parallax-box, .parallax-shadow', [
          style({ opacity: 0 }),
          animate( '1s .5s ease', style({ opacity: 1 })),
        ])
      ])
  ])
])

export const decoration2Anim = trigger('decoration2', [
  state('hidden', style({
    transform: 'translateY(250%) skewY(-147deg) rotateZ(-13deg)'
  })),
  state('visible', style({
    transform: 'translateY(0) skewY(-147deg) rotateZ(-13deg)'
  })),
  transition('hidden => visible', [
    group([
      animate('.6s .5s ease'),
      query('.parallax-box, .parallax-shadow', [
        style({ opacity: 0 }),
        animate( '.6s .5s ease', style({ opacity: 1 })),
      ])
    ])
  ])
])

export const pictureAnim = trigger('picture', [
  state('hidden', style({
    transform: 'translateX(250%)'
  })),
  state('visible', style({
    transform: 'translateX(0)'
  })),
  transition('hidden => visible', [
      group([
        animate('1s 1s ease'),
        query('.parallax-box, .parallax-shadow', [
          style({ opacity: 0 }),
          animate( '1s 1s ease', style({ opacity: 1 })),
        ])
      ])
  ])
])

export const textAnim = trigger('text', [
  state('hidden', style({
    transform: 'translateY(100%) translateZ(80px)',
    opacity: '0'
  })),
  state('visible', style({
    transform: 'translateY(0) translateZ(80px)',
    opacity: 1
  })),
  transition('hidden => visible', [
    animate('1s 1s ease')
  ])
])