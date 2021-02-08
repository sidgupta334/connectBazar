import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpassordPage } from './forgotpassord.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpassordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpassordPageRoutingModule {}
