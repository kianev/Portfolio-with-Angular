import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class DataService {

  constructor(private db: AngularFirestore) { }

  getProject(id: string) {
    return this.db.collection('projects').doc(id).ref;
  }

  fetchProjects() {
    return this.db.collection('projects').snapshotChanges();
  }

  deleteProjectFromDB(id: string) {
     this.db.collection('projects').doc(id).delete()
       .then(result => {
         console.log('Project deleted')
       })
       .catch(error => {
         console.log(error);
       });
  }
}
