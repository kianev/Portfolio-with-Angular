import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class DataService {

  constructor(private db: AngularFirestore) { }

  fetchProjects() {
    return this.db.collection('projects').snapshotChanges();
  }

  deleteProjectFromDB(id) {
     this.db.collection('projects').doc(id).delete()
       .then(result => {
         console.log(result, 'Project deleted')
       })
       .catch(error => {
         console.log(error);
       });
  }
}
