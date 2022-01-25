import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';

declare let google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('map', {read: ElementRef,static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title: 'Tour Eiffel',
      latitude: '48.857966',
      longitude: '2.2945015'
    },
    {
      title: 'Arc de Triomphe',
      latitude: '48.873779',
      longitude: '2.295037'
    },
    {
      title: 'Musée du Louvre',
      latitude: '48.861147',
      longitude: '2.338028'
    },
    {
      title: 'Basilique du Sacré-Cœur',
      latitude: '48.886806',
      longitude: ' 2.343015'
    },

  ];


  constructor() { }

  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap(markers){
    for (const marker of markers){
      const position = new google.maps.LatLng(marker.latitude,marker.longitude);
      const mapMarker = new google.maps.Marker({
        position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }
  addInfoWindowToMarker(marker) {
   const infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class="firstHeading">' + marker.title +'</h2>' +
                              '<p> Latitude : ' + marker.latitude + '</p>' +
                              '<p> Longitude : ' + marker.longitude + '</p>' +
                            '</div>';
   const infoWindow = new google.maps.infoWindow({
     content: infoWindowContent
   });

   marker.addListener('click',() =>{
     this.closeAllInfoWindows();
     infoWindow.open(this.map,marker);
   });
   this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for(const window of this.infoWindows){
      window._.close();
    }
  }

  showMap(){
    const location = new google.maps.LatLng(48.866667,2.333333);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  ngOnInit() {
  }


}
