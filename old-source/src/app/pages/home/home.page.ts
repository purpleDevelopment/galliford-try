import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slider') slides: IonSlides;
  mySlideOptions: object;
  showPage: any = false;

  constructor(private router: Router, private storage: Storage) {


    this.mySlideOptions = {
      pager: true,
    };
    storage.get('homePageStartClicked').then(value => {
    //  console.log('homePageStartClicked:', value);
      if (value) {
        this.router.navigateByUrl('page-listing');
      } else {
        this.showPage = true;
      }
    });

  }

  finish() {
    this.storage.set('homePageStartClicked', true);
    this.router.navigateByUrl('page-listing');
  }

  next() {
    this.slides.slideNext();
  }
}