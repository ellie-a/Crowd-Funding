import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css'],
  providers: [ProjectService]
})
export class ProjectTileComponent implements OnInit {
  @Input() project;
  constructor(private projectService: ProjectService, private router: Router) {
  }

  ngOnInit() {}

  navigateTo(project) {
    this.router.navigate(['projects', project.$key]);
  }
}
