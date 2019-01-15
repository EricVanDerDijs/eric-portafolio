import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild
} from '@angular/animations';

export const titleAnim = trigger('projects-title', [
    state('hidden', style({
      transform: 'translateY(100%)',
      opacity: '0'
    })),
    state('visible', style({
      transform: 'translateY(0)',
      opacity: '1'
    })),
    transition('hidden => visible', [
        animate('1s .5s ease')
    ])
  ]
)

export const projectsAnim = trigger('projects', [
  transition('* => *', [
    query(':enter', [
      style({transform: 'translateX(120%)'}),
      stagger( 100, [ animate('1s .6s ease', style({transform: 'translateX(0)'})) ])
    ], { optional: true })
  ])
])

export const projecySelectionAnim = trigger('selected', [
  state('true', style({transform: 'translateX(150%)'}) ),
  state('false', style({transform: 'translateX(0)'}) ),
  transition('false <=> true', [
    animate('.3s ease')
  ])
])

export const detailsAnim = trigger('details', [
  transition(':enter', [
    query('@details', animateChild() , { optional: true })
  ]),
  transition(':leave', [
    query('@details', animateChild() , { optional: true })
  ])
])

