import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ProjectService } from '../../project.service';
import { Project } from '../../project.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService]
})
export class EditComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

  }

  deleteProject() {
    this.projectService.delete(this.selectedProject);
  }

  editSelectedProject(){
    this.selectedProject.edit = false;
    this.projectService.updateProject(this.selectedProject);
  }
}
