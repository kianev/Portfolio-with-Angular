import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Subscription } from "rxjs/Subscription";
import { MatSort, MatTableDataSource, MatPaginator } from "@angular/material";

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['project', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();
  projectsSubscription: Subscription;
  isLoading = true;


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
        this.dataSource.data = projects;
        this.isLoading = false;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  deleteProject(id: string) {
    this.dataService.deleteProjectFromDB(id);
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }

}
