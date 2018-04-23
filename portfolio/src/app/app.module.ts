import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule}  from "./material.module";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './auth/login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { FormsModule } from "@angular/forms";
import { AuthService } from './auth/auth.service';
import { AngularFireAuthModule } from "angularfire2/auth";
import { ProjectsComponent } from './projects/projects.component';
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { AdminProjectFormComponent } from './admin/admin-projects/admin-project-form/admin-project-form.component';
import { UploadService } from './services/upload.service';
import { DataService } from './services/data.service';
import { AdminProjectEditFormComponent } from './admin/admin-projects/admin-project-edit-form/admin-project-edit-form.component';
import { SkillsFrontendComponent } from './skills/skills-frontend/skills-frontend.component';
import { SkillsBackendComponent } from './skills/skills-backend/skills-backend.component';
import { EmailService } from './services/email.service';
import { UiService } from "./services/ui.service";
import { FooterComponent } from './footer/footer/footer.component';
import {AuthGuard} from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    SidebarComponent,
    ProjectsComponent,
    ProjectCardComponent,
    AdminProjectsComponent,
    AdminProjectFormComponent,
    AdminProjectEditFormComponent,
    SkillsFrontendComponent,
    SkillsBackendComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlexLayoutModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AuthService, UploadService, DataService, EmailService, UiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
