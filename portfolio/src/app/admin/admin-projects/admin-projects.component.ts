import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Subscription } from "rxjs/Subscription";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit, OnDestroy {
  displayedColumns = ['project', 'edit', 'delete'];
  dataSource;
  projectsSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.projectsSubscription = this.dataService.fetchProjects().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })
      .subscribe(projects => {
        this.dataSource = new MatTableDataSource(projects);
        console.log(this.dataSource.data);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  deleteProject(id: string) {
    this.dataService.deleteProjectFromDB(id);
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }

}
