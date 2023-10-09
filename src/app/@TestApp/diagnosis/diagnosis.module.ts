import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagnosisListComponent } from './components/diagnosis-list/diagnosis-list.component';
import { DiagnosisRoutingModule } from './diagnosis-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { DiagnosisItemComponent } from './components/diagnosis-item/diagnosis-item.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

const MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatButtonModule
];
@NgModule({
  declarations: [
    DiagnosisListComponent,
    DiagnosisItemComponent
  ],
  imports: [
    CommonModule,
    DiagnosisRoutingModule,
    ReactiveFormsModule,
    ...MAT_MODULES

  ]
})
export class DiagnosisModule { }
