import { Component, Input, Renderer2, ElementRef } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { titleAnim, projectsAnim, projecySelectionAnim, detailsAnim } from './projects.animations'
import { Project } from 'src/assets/projects';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [ titleAnim, projectsAnim, projecySelectionAnim, detailsAnim ]
})
export class ProjectsComponent implements OnInit, OnChanges, OnDestroy {

  projectsList: Project[];
  selectedProject: Project;
  selectedProjectIndex: number;
  visibility: string = 'hidden';
  private scrollListener: Function;

  @Input() loadingState: string
  @Input() isMobile: boolean

  constructor(
    private util: UtilsService,
    private projects: ProjectsService,
    private renderer: Renderer2,
    private el: ElementRef
    ) {

    this.projects.selectedProject.subscribe(project => {
      if(!project){
        setTimeout(() => {
          this.selectedProjectIndex = null;
        }, 1500);
      }
      
      this.selectedProject = project
    })
  }

  ngOnInit() {
    this.scrollListener = this.renderer
      .listen('window', 'scroll', this.displayContent )
    this.projectsList = this.projects.getAll();
  }

  ngOnChanges() {
    if(this.loadingState === 'loaded'){
      this.displayContent()
    }
  }

  ngOnDestroy() {
    this.scrollListener()
  }

  selectProject = (i: number) => {
    this.selectedProjectIndex = i;
    setTimeout(() => {
      this.projects.selectProject( this.projects.getById(i) );
    }, 300);
  }

  private displayContent = (): void => {
    const isVisible: boolean = this.util.isElementVisible(this.el.nativeElement);
    if( isVisible && this.visibility === 'hidden' ) {
      this.visibility = 'visible';
    }
  }

}
