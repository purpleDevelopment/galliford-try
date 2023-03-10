import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-upload-best-practice',
  templateUrl: './upload-best-practice.page.html',
  styleUrls: ['./upload-best-practice.page.scss'],
})
export class UploadBestPracticePage implements OnInit {

  constructor(public photoService: PhotoService) {
    
  }

  ngOnInit() {
  }

  takePicture() {
    this.photoService.takePicture();
  }


}
