import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListPage } from './hotel-list.page';

const routes: Routes = [
  {
    path: '',
    component: HotelListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./hotel-new/hotel-new.module').then( m => m.HotelNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./hotel/hotel.module').then( m => m.HotelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelListPageRoutingModule {}
