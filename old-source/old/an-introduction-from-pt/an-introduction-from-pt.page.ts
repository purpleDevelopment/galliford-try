import { Component, OnInit } from '@angular/core';
import { HomeLinkService } from '../home-link.service';

@Component({
  selector: 'app-an-introduction-from-pt',
  templateUrl: './an-introduction-from-pt.page.html',
  styleUrls: ['./an-introduction-from-pt.page.scss'],
})
export class AnIntroductionFromPTPage implements OnInit {

  constructor(private router: HomeLinkService) {
  }

  ngOnInit() {
  }

  backButton() {
    console.log('clicked');
  }

  async home() {
    this.router.home();
  }
}
