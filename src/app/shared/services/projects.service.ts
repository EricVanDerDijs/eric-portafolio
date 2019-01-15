import { Injectable } from '@angular/core';
import { Project, projects } from 'src/assets/projects';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectSource = new BehaviorSubject<Project>(null)
  selectedProject = this.projectSource.asObservable();

  constructor() { }

  getById = (id: number): Project => {
    return projects[id]
  }

  getAll = (): Project[] => {
    return projects
  }

  selectProject = (project: Project): void => {
    this.projectSource.next(project)
  }

}
