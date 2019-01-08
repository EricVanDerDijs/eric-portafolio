import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxContainerDirective } from './directives/parallax-container.directive';
import { ScrollIconComponent } from './components/scroll-icon/scroll-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxContainerDirective,
    ScrollIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
