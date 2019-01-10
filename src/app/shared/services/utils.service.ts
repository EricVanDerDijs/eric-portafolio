import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  isElementVisible = (el: HTMLElement): boolean => {
    let boundings = el.getBoundingClientRect()

    if(window.innerHeight > boundings.top && boundings.bottom > 0){
      return true
    }
    return false
  }
}