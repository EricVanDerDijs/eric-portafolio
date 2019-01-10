import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  group
} from '@angular/animations';

export const sidebarAnim = trigger('sidebar-visibility', [
    state('hidden', style({
      transform: 'translateX(-100%)',
    })),
    state('visible', style({
      transform: 'translateX(0)'
    })),
    transition('hidden => visible', [
      group([
        animate('0.2s ease'),
        query('.animated', [
          style({ transform: 'translateX(-50px)', opacity: '0' })
        ])
      ]),
      query('.animated', [
        stagger(20, animate('.2s ease', style({transform: 'translateX(0)', opacity: '1'})))
      ])
    ]),
    transition('visible => hidden', [
      query('.animated', [
        stagger(-10, animate('.2s ease', style({transform: 'translateX(-50px)', opacity: '0'})))
      ]),
      animate('0.2s ease')
    ])
  ]
)

export const sidebarButtonAnim = trigger('sidebar-button-visibility', [
  state('hidden', style({
    transform: 'translateX(-100%)',
  })),
  state('visible', style({
    transform: 'translateX(0)'
  })),
  transition('hidden <=> visible', [
      animate('0.2s ease')
    ])
  ]
)