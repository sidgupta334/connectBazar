import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewfeedbackPage } from './viewfeedback.page';

const routes: Routes = [
  {
    path: '',
    component: ViewfeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewfeedbackPageRoutingModule {}
