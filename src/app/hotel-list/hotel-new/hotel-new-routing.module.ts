import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelNewPage } from './hotel-new.page';

const routes: Routes = [
  {
    path: '',
    component: HotelNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelNewPageRoutingModule {}
