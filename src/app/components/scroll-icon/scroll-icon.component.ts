import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-icon',
  templateUrl: './scroll-icon.component.html',
  styleUrls: ['./scroll-icon.component.scss']
})
export class ScrollIconComponent {

  @Input('color') color = 'white'

  constructor() { }

  getBorders = ():any => {
    return {
      'border-right': `6px solid ${this.color}`,
      'border-bottom': `6px solid ${this.color}`
    }
  }

}
