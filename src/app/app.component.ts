import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
