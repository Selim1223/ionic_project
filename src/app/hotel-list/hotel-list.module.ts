import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelListPageRoutingModule } from './hotel-list-routing.module';

import { HotelListPage } from './hotel-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelListPageRoutingModule
  ],
  declarations: [HotelListPage]
})
export class HotelListPageModule {}
