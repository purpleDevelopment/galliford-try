import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { Ng2ImgMaxService } from 'ng2-img-max';

declare var window;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public picture: any = {};

  constructor(
    private camera: Camera,
    private storage: Storage,
    private ng2ImgMax: Ng2ImgMaxService,
  ) {
  }

  async takePicture() {
    this.picture = {};
    if (!!window.cordova) {
      await this.cordovaTakePicture();
    } else {
      await this.webTakePicture();
    }
  }

  cordovaTakePicture() {
    return new Promise(resolve => {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true,
        targetHeight: 600,
        targetWidth: 800,
      };

      return this.camera.getPicture(options)
        .then(this.readLocalFile)
        .then(async (imageData: any) => {
          this.picture = null;
          const readBaseResult = await this.readBase(imageData);
          const readTextResult = await this.readText(imageData);
          this.picture = {
            fileName: 'Best Practice',
            contentType: imageData.type,
            content: readBaseResult,
            contentData: readTextResult,
          };
          resolve();
        }, (err) => {
      //    console.log('Camera issue: ' + err);
        });
    });
  }

  takePhoto() {
    return new Promise(resolve => {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.CAMERA,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true,
        targetHeight: 600,
        targetWidth: 800,
      };

      return this.camera.getPicture(options)
        .then(this.readLocalFile)
        .then(async (imageData: any) => {
          this.picture = null;
          const readBaseResult = await this.readBase(imageData);
          const readTextResult = await this.readText(imageData);
          this.picture = {
            fileName: 'Best Practice',
            contentType: imageData.type,
            content: readBaseResult,
            contentData: readTextResult,
          };
          resolve();
        }, (err) => {
    //      console.log('Camera issue: ' + err);
        });
    });
  }

  webTakePicture() {
    return new Promise(resolve => {
      const input: HTMLInputElement = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.click();
      input.addEventListener('change', async (media: any) => {
        this.resize(media.target.files[0]).subscribe(async file => {
          this.picture = null;
          const readBaseResult = await this.readBase(file);
          const readTextResult = await this.readText(file);
          this.picture = {
            fileName: file.name,
            contentType: file.type,
            content: readBaseResult,
            contentData: readTextResult,
          };
          resolve();
        });
      });
    });
  }

  loadSaved() {
    return this.picture;
  }

  private readLocalFile(fileSystemPath: string) {
    return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(
        fileSystemPath,
        fileEntry => {
          fileEntry.file(resolve);
        },
        () => {
          reject('Couldn\'t read selected file');
        },
      );
    });
  }

  private readBase(file): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  private readText(file): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  private resize(file) {
    return this.ng2ImgMax.resizeImage(file, 60, 80);
  };
}
