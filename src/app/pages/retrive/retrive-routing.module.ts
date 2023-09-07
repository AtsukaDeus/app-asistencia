import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetrivePage } from './retrive.page';

const routes: Routes = [
  {
    path: '',
    component: RetrivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetrivePageRoutingModule {}
