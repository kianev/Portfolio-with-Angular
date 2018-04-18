import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../../services/data.service";
import { UploadService } from "../../../services/upload.service";

@Component({
  selector: 'app-admin-project-edit-form',
  templateUrl: './admin-project-edit-form.component.html',
  styleUrls: ['./admin-project-edit-form.component.css']
})
export class AdminProjectEditFormComponent implements OnInit {
  id;
  project;
  projectFetched = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService,
              public uploadService: UploadService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.dataService.getProject(this.id).get()
      .then(project => {
        this.project = project.data();

        this.projectFetched = true;
      });
  }

  uploadImage(event){
    this.uploadService.uploadImageToStorage(event.target.files[0]);
  }

  onEditProject(form) {
    this.uploadService.updateProject(form.value, this.id);
    this.router.navigate(['/admin-projects']);
  }
}
