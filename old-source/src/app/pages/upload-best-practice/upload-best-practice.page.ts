import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PhotoService } from '../../services/photo-service/photo.service';
import { HomeLinkService } from '../../services/home-link/home-link.service';
import { ContentService } from '../../services/content-service/content.service';
import { Router } from '@angular/router';
//import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Component({
  selector: 'app-upload-best-practice',
  templateUrl: './upload-best-practice.page.html',
  styleUrls: ['./upload-best-practice.page.scss'],
})
export class UploadBestPracticePage {
  public uploadIsInProgress = false;
  public picture: any;
  public buTypes = [];
  public toolsTypes = [];
  public detailsTypes = [];
  public fields = {
    name: '',
    title: '',
    email: '',
    description: '',
    disclaimer: false,
    businessUnit: null,
    toolsType: null,
    detailType: null,
  };

  constructor(
  //private ga: GoogleAnalytics,
    private homeLinkService: HomeLinkService,
    private router: Router,
    public photoService: PhotoService,
    public contentService: ContentService,
    public alertController: AlertController,
  ) {
    this.picture = null;
    contentService.buTypes.subscribe(buTypes => this.buTypes = buTypes);
    contentService.toolsTypes.subscribe(toolsTypes => this.toolsTypes = toolsTypes);
    contentService.detailsTypes.subscribe(detailsTypes => this.detailsTypes = detailsTypes);

    //this.ga.trackView('Upload Best Practice');
  }

  async takePicture() {
    if (!window.cordova) {
      this.takePictureFromLibrary();
    } else {
      const alert = await this.alertController.create({
        header: 'Select source',
        buttons: [{
          text: 'Camera',
          handler: this.takePictureFromCamera.bind(this),
        }, {
          text: 'Library',
          handler: this.takePictureFromLibrary.bind(this),
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        ],
      });
      await alert.present();
    }
  }

  async takePictureFromLibrary() {
    await this.photoService.takePicture();
    this.picture = this.photoService.loadSaved();
  }

  async takePictureFromCamera() {
    await this.photoService.takePhoto();
    this.picture = this.photoService.loadSaved();
  }

  isFormInvalid() {
    return !(
      this.picture
      && this.picture.content
      && this.fields.name.length > 3
      && this.fields.email.length > 3
      && this.fields.description.length > 3
      && this.fields.disclaimer
    );
  }

  getFormInvalidMessage() {
    return !this.picture ? 'You should attach an image' :
      !this.picture.content ? 'You should attach an image' :
        !(this.fields.description.length > 3) ? 'You should fill a description' :
          !(this.fields.name.length > 3) ? 'You should enter your name' :
            !(this.fields.email.length > 3) ? 'You should enter your email' :
              !this.fields.disclaimer ? 'You should accept the disclaimer' : 'Internal error';
  }

  async upload() {
  //  console.log('this.isFormValid():', this.isFormInvalid());
    if (this.isFormInvalid()) {
      const alert = await this.alertController.create({
        header: 'Form is not valid!',
        message: this.getFormInvalidMessage(),
        buttons: [{ text: 'Ok' }],
      });
      await alert.present();
      return;
    }
    this.uploadIsInProgress = true;
    await this.contentService.postContent({
      title: this.fields.title,
      comments: this.fields.description,
      authorEmail: this.fields.email,
      author: this.fields.name,
      picture: this.picture,
      businessUnit: this.fields.businessUnit,
      toolsType: this.fields.toolsType,
      detailType: this.fields.detailType,
    }).catch(async e => {
      const alert = await this.alertController.create({
        header: 'Something went wrong',
        message: 'Please try again',
        buttons: [{ text: 'Ok' }],
      });
      await alert.present();
      this.uploadIsInProgress = false;
    });
 //   console.log('upload done');
    await this.contentService.updateBestPractices();
    this.uploadIsInProgress = false;
    this.picture = null;
    this.fields = {
      name: '',
      title: '',
      email: '',
      description: '',
      disclaimer: false,
      businessUnit: null,
      toolsType: null,
      detailType: null,
    };
    this.router.navigateByUrl('best-practice');
  }

  async home() {
    this.homeLinkService.home();
  }
}
