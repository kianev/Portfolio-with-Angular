import { NgModule } from "@angular/core";
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from "@angular/material";

const MAT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [MAT_MODULES],
  exports: [MAT_MODULES]
})

export class MaterialModule {

}
