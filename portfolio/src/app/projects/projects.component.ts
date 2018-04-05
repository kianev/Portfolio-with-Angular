import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProjectsService } from "./projects.service";
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects;
  projectsSubscription: Subscription;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
   this.projectsSubscription = this.projectsService.fetchProjects().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })
     .subscribe(projects => {
       this.projects = projects;
       console.log(this.projects);
     });
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }
}
