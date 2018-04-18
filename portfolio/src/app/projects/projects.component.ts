import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects;
  isLoading = true;
  projectsSubscription: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
   this.projectsSubscription = this.dataService.fetchProjects().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })
     .subscribe(projects => {
       this.projects = projects;
       this.isLoading = false;
     });
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }
}
