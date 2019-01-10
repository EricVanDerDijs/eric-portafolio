import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxContainerDirective } from './shared/directives/parallax-container.directive';
import { ScrollIconComponent } from './components/scroll-icon/scroll-icon.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HamburgerButtonComponent } from './components/hamburger-button/hamburger-button.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxContainerDirective,
    ScrollIconComponent,
    LandingComponent,
    ProjectsComponent,
    SidebarComponent,
    HamburgerButtonComponent,
    CloseButtonComponent
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
