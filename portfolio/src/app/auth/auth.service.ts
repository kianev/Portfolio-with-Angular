import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { AuthData } from "./auth-data.model";

@Injectable()
export class AuthService {
  isAuth:boolean = false;
  errorMessage;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.isAuth = true;
        this.router.navigate(['/admin-projects']);
      })
      .catch(error => {
        this.errorMessage = error.message;
      })
  }

  isAuthenticated() {
    return this.isAuth;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isAuth = false;
    this.router.navigate(['/']);
  }
}
