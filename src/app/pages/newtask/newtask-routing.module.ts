import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewtaskPage } from './newtask.page';

const routes: Routes = [
  {
    path: '',
    component: NewtaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewtaskPageRoutingModule {}
