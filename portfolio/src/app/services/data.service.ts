import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { UiService } from "./ui.service";

@Injectable()
export class DataService {

  constructor(private db: AngularFirestore, private uiService: UiService) { }

  getProject(id: string) {
    return this.db.collection('projects').doc(id).ref;
  }

  fetchProjects() {
    return this.db.collection('projects').snapshotChanges();
  }

  deleteProjectFromDB(id: string) {
     this.db.collection('projects').doc(id).delete()
       .then(result => {
         this.uiService.showSnackbar('Project deleted!', '', 3000);
       })
       .catch(error => {
         this.uiService.showSnackbar('Project could not be deleted!', '', 3000);
       });
  }
}
