import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.page.html',
  styleUrls: ['./hotel-list.page.scss'],
})
export class HotelListPage implements OnInit {
  hotels!: any;
    constructor(

      // eslint-disable-next-line @typescript-eslint/naming-convention
      private Hotel: HotelService
      ) { }

      ngOnInit(): void {
        this.Hotel.getAllHotels().subscribe((data: any) =>{
          this.hotels = data;
        });
      }
    }
