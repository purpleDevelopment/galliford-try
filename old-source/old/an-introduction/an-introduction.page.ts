import { Component, OnInit } from '@angular/core';
import { HomeLinkService } from '../home-link.service';

@Component({
  selector: 'app-an-introduction',
  templateUrl: './an-introduction.page.html',
  styleUrls: ['./an-introduction.page.scss'],
})
export class AnIntroductionPage implements OnInit {

  constructor(private router: HomeLinkService) {
  }

  ngOnInit() {
  }

  async home() {
    this.router.home();
  }
}
