import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { EditComponent } from './edit/edit.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router) { }
  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  deleteProject(project) {
    this.projectService.delete(project);
  }

  editSelectedProject(project: any){
    this.projectService.hideAllEditComponents();
    project.edit = true;
  }

}
