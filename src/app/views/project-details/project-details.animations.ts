import {
  trigger,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

export const detailsAnim = trigger('details', [
    transition('void => *', [
      style({
        transform: 'scaleY(.3) rotateY(25deg) translateZ(-200px) translateX(200%)'
      }),
      animate('.5s ease', style({ 
        transform: 'scaleY(.3) rotateY(0) translateZ(0) translateX(0)'
      })),
      animate('.5s ease', style({ transform: 'scale(1) rotate(0) translate(0)' })),
      group([
        query('.header', style({opacity: 0, transform: 'translateY(-150%)'}) ),
        query('.info', style({opacity: 0, transform: 'translateX(-150%)'}) ),
        query('.video', style({opacity: 0, transform: 'translateX(150%)'}) )
      ]),
      group([
        query('.header', animate('.5s ease', style({opacity: 1, transform: 'translateY(0)'}) ) ),
        query('.info', animate('.5s ease', style({opacity: 1, transform: 'translateX(0)'}) ) ),
        query('.video', animate('.5s ease', style({opacity: 1, transform: 'translateX(0)'}) ) )
      ])
    ]),
    transition('* => void', [
      group([
        query('.header', animate('.5s ease', style({opacity: 0, transform: 'translateY(-150%)'}) ) ),
        query('.info', animate('.5s ease', style({opacity: 0, transform: 'translateX(-150%)'}) ) ),
        query('.video', animate('.5s ease', style({opacity: 0, transform: 'translateX(150%)'}) ) )
      ]),
      animate('.5s ease', style({ 
        transform: 'scale(.3) rotate(0) translate(0)',
        background: '#f3c171'
      })),
      animate('.5s ease', style({ 
        transform: 'scaleY(.3) rotateY(25deg) translateZ(-200px) translateX(200%)',
        background: '#f3c171'
      }))
    ])
  ]
)