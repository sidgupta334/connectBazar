import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearcModalPage } from './searc-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SearcModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearcModalPageRoutingModule {}
