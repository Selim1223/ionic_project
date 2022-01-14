import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Hotel } from './models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotelsRef: AngularFirestoreCollection<Hotel>;
  private dbPath = '/hotels';

  constructor(
    private db: AngularFirestore
  ) {
    this.hotelsRef = db.collection(this.dbPath);
   }

   getAllHotels(): any {
    return this.hotelsRef.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({id: doc.payload.doc.id, ...doc.payload.doc.data()})))
    );
  }

  saveNewHotel(hotel: Hotel): any {
    return new Observable(obs => {
      this.hotelsRef.add({...hotel}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable(obs => {
      this.hotelsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(hotel: Hotel) {
    return new Observable(obs => {
      this.hotelsRef.doc(hotel.id).update(hotel);
      obs.next();
    });
  }

  delete(id: any) {
    this.hotelsRef.doc(id).delete();
  }
}
