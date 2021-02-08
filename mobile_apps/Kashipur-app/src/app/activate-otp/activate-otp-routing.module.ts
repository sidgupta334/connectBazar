import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateOtpPage } from './activate-otp.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateOtpPageRoutingModule {}
