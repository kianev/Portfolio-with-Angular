import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule}  from "./material.module";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import {FormsModule} from "@angular/forms";
import { AuthService } from './auth/auth.service';
import {AngularFireAuthModule} from "angularfire2/auth";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    SidebarComponent
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
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
