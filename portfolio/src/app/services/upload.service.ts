import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from "rxjs/Observable";
import { Project } from "../models/project.model";
import { AngularFirestore } from "angularfire2/firestore";

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
    console.log(this.uploadPercent);

    task.downloadURL().subscribe(downloadURL => {
      console.log(downloadURL);
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
     console.log(project);
     this.db.collection('projects').add(project);
   }
  }
}
