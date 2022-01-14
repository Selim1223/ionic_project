export class Hotel {
    id?: string;
    country: string;
    rate: string;
    onAir: boolean;
    pictureLink: string;
    adresse: string;
    startOfStay: string;
    capacity: string;
    endOfStay: string;
    description: string;
    time: string;
    title: string;

    constructor() {
      this.country = '';
      this.rate = '';
      this.onAir = false;
      this.pictureLink = '';
      this.adresse = '';
      this.startOfStay = '';
      this.capacity = '';
      this.endOfStay = '';
      this.description = '';
      this.time = '';
      this.title = '';
    }
}
