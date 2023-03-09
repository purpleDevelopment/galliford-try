import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { HomeLinkService } from '../home-link.service';

@Component({
  selector: 'app-best-practice',
  templateUrl: './best-practice.page.html',
  styleUrls: ['./best-practice.page.scss'],
})
export class BestPracticePage implements OnInit {
  filtersOpened = false;
  public base64Image: string;

  constructor(public photoService: PhotoService, private router: HomeLinkService) {
    this.base64Image = "../assets/articleHeroOne.png";
  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  home() {
    this.router.home();
  }

  switchFilters() {
    this.filtersOpened = !this.filtersOpened;
  }

  setFilters() {
    // todo: filter content
    this.filtersOpened = !this.filtersOpened;
  }

  upload() {
    this.photoService.takePicture();

    this.base64Image = this.photoService.loadSaved();


  }

}
