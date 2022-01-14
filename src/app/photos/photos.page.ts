import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  public photos: picture[]= [];

  constructor() { }

  ngOnInit() {
  }

  async addNewPhoto(){
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: '',
      webViewPath: capture.webPath
    });
  }

  takePhoto(){
    this.addNewPhoto();
  }

}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface picture{
  filepath: string;
  webViewPath: string;
}
