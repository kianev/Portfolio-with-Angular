import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class ProjectsService {

  constructor(private db: AngularFirestore) { }

  fetchProjects() {
    return this.db.collection('projects').snapshotChanges();
  }

}
