import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {AdminProjectsComponent} from "./admin/admin-projects/admin-projects.component";
import {AdminProjectFormComponent} from "./admin/admin-projects/admin-project-form/admin-project-form.component";
import {AdminProjectEditFormComponent} from "./admin/admin-projects/admin-project-edit-form/admin-project-edit-form.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin-login', component: LoginComponent},
  {path: 'admin-projects', component: AdminProjectsComponent, canActivate: [AuthGuard]},
  {path: 'admin-projects/:id', component: AdminProjectEditFormComponent, canActivate: [AuthGuard]},
  {path: 'admin-project-form', component: AdminProjectFormComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
