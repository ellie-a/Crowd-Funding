import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ProjectTileComponent } from '../project-tile/project-tile.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService]
})
export class WelcomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private projectService: ProjectService, private router: Router) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
