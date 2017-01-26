import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('/projects/' + projectId);
  }
  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateProject(localUpdateProject){
    var projectEntryInFirebase = this.getProjectById(localUpdateProject.$key);
    projectEntryInFirebase.update({name: localUpdateProject.name,
                                  managers: localUpdateProject.managers,
                                  description: localUpdateProject.description,
                                  target: localUpdateProject.target,
                                  details: localUpdateProject.details,
                                  swag: localUpdateProject.swag,
                                  priority: localUpdateProject.priority,
                                  edit: false})
  }

  delete(projectToDelete) {
    this.getProjectById(projectToDelete.$key).remove();
  }
}
