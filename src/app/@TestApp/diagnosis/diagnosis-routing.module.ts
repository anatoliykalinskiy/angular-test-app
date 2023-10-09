import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiagnosisListComponent} from "./components/diagnosis-list/diagnosis-list.component";

const routes: Routes = [
  {
    path: '',
    component: DiagnosisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisRoutingModule { }
