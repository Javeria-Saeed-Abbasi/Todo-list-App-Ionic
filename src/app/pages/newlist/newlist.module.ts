import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewlistPageRoutingModule } from './newlist-routing.module';

import { NewlistPage } from './newlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewlistPageRoutingModule
  ],
  declarations: [NewlistPage]
})
export class NewlistPageModule {}
