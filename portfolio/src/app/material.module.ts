import { NgModule } from "@angular/core";
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from "@angular/material";

const MAT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
];

@NgModule({
  imports: [MAT_MODULES],
  exports: [MAT_MODULES]
})

export class MaterialModule {

}
