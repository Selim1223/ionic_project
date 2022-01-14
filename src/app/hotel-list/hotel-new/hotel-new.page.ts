/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-hotel-new',
  templateUrl: './hotel-new.page.html',
  styleUrls: ['./hotel-new.page.scss'],
})
export class HotelNewPage implements OnInit {
  public hotel!: Hotel;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    private Hotel: HotelService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.hotel = new Hotel();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouvel Hotel enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tabs/hotels']);
      }, 2000);
    });
  }


  add() {
    this.Hotel.saveNewHotel(this.hotel).subscribe(() => {
      this.hotel = new Hotel();
      this.presentToast();
    });
  }

}
