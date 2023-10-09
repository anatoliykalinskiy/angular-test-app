import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/diagnosis', pathMatch: 'full' },
  {
    path: 'diagnosis',
    loadChildren: () => import('./@TestApp/diagnosis/diagnosis.module').then(m => m.DiagnosisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
