import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from "rxjs/Observable";
import { AngularFirestore } from "angularfire2/firestore";
import { Project } from "../models/project.model";

@Injectable()
export class UploadService {
  uploadPercent: Observable<number>;
  downloadURL: string;
  uploaded: boolean = false;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  uploadImageToStorage(image){
    this.uploaded = true;
    const fileName = image.name;
    const task = this.storage.upload(fileName, image);

    this.uploadPercent = task.percentageChanges();
    task.downloadURL().subscribe(downloadURL => {
      this.downloadURL = downloadURL;
      this.uploaded = false;
    });
  }

  uploadDone() {
    return this.uploaded;
  }

  uploadProjects(project: Project) {
   if(this.downloadURL) {
     project.imageUrl = this.downloadURL;
     this.db.collection('projects').add(project);
   }
  }

  updateProject(project: Project, id: string){
    if(this.downloadURL) {
      project.imageUrl = this.downloadURL;
      this.db.collection('projects').doc(id).update(project);
    }
  }
}
