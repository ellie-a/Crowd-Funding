import { Component } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent  {

  constructor(private projectService: ProjectService, private router: Router) { }

  submitForm(name: string, manangers: string, description: string, target: number, details: string, swag: string) {
    this.projectService.addProject(new Project(name, [manangers], description, target, details, [swag]));
    this.router.navigate(['']);
  }

}
