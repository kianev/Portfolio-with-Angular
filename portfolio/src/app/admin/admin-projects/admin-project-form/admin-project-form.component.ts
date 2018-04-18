import { Component, OnInit } from '@angular/core';
import { UploadService } from "../../../services/upload.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-project-form',
  templateUrl: './admin-project-form.component.html',
  styleUrls: ['./admin-project-form.component.css']
})
export class AdminProjectFormComponent implements OnInit {

  constructor(public uploadService: UploadService, private router: Router) { }

  ngOnInit() {
  }

  uploadImage(event){
    this.uploadService.uploadImageToStorage(event.target.files[0]);
  }

  onProjectUpload(form) {
    this.uploadService.uploadProjects(form.value);
    this.router.navigate(['/admin-projects']);
  }
}
