import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewtaskPageRoutingModule } from './newtask-routing.module';

import { NewtaskPage } from './newtask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewtaskPageRoutingModule
  ],
  declarations: [NewtaskPage]
})
export class NewtaskPageModule {}
