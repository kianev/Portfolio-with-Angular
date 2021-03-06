import { NgModule } from "@angular/core";
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
  MatToolbarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule, MatTabsModule,
  MatSnackBarModule
} from "@angular/material";
import {MatProgressBarModule} from '@angular/material/progress-bar';

const MAT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTabsModule,
  MatSnackBarModule
];

@NgModule({
  imports: [MAT_MODULES],
  exports: [MAT_MODULES]
})

export class MaterialModule {

}
