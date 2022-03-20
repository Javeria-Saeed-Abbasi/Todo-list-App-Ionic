import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewtaskPageRoutingModule } from './newtask-routing.module';

import { NewtaskPage } from './newtask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewtaskPageRoutingModule
  ],
  declarations: [NewtaskPage]
})
export class NewtaskPageModule {}
