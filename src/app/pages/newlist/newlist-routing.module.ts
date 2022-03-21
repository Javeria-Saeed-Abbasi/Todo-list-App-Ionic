import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewlistPage } from './newlist.page';

const routes: Routes = [
  {
    path: '',
    component: NewlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewlistPageRoutingModule {}
