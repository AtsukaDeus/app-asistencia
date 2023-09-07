import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetrivePageRoutingModule } from './retrive-routing.module';

import { RetrivePage } from './retrive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetrivePageRoutingModule
  ],
  declarations: [RetrivePage]
})
export class RetrivePageModule {}
