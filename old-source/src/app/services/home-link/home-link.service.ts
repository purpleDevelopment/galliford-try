import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeLinkService {

  constructor(private router: Router) {
  }

  async home() {
    this.router.navigateByUrl('page-listing');
  }

  async upload() {
    this.router.navigateByUrl('upload-best-practice');
  }

  async sharing() {
    this.router.navigateByUrl('best-practice');
  }

}
