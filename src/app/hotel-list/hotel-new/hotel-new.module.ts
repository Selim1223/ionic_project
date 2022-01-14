import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelNewPageRoutingModule } from './hotel-new-routing.module';

import { HotelNewPage } from './hotel-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelNewPageRoutingModule
  ],
  declarations: [HotelNewPage]
})
export class HotelNewPageModule {}
