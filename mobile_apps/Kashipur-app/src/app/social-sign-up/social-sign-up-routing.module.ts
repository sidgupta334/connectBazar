import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialSignUpPage } from './social-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SocialSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialSignUpPagePageRoutingModule {}
