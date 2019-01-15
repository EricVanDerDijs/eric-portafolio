import { Component, Input, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Project } from 'src/assets/projects';
import { detailsAnim } from './project-details.animations';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [ detailsAnim ]
})
export class ProjectDetailsComponent implements AfterViewInit, OnDestroy {

  private body: HTMLElement;
  @Input() project: Project = null;
  
  constructor(
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    private projects: ProjectsService,
    private ref: ChangeDetectorRef
  ) {
    this.body = document.querySelector('body');
  }

  ngAfterViewInit() {
    this.ref.detach();
    // lock scroll
    this.renderer.setStyle(this.body ,'overflow-y', 'hidden');
  }

  ngOnDestroy() {
    this.ref.reattach();
    // unlock scroll
    this.renderer.setStyle(this.body ,'overflow-y', 'auto');
  }

  getTrustedUrl = (url: string) => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  closeProject = (): void => {
    this.projects.selectProject(null)
  }

}
