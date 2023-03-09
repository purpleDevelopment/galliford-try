import { Component } from '@angular/core';
import { ContentService } from '../../services/content-service/content.service';
import { Router } from '@angular/router';
import { HomeLinkService } from '../../services/home-link/home-link.service';
//import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Component({
  selector: 'app-page-listing',
  templateUrl: './page-listing.page.html',
  styleUrls: ['./page-listing.page.scss'],
})
export class PageListingPage {
  links: any = [];
  public uploadIsInProgress = false;

  constructor(
  //  private ga: GoogleAnalytics,
    private homeLinkService: HomeLinkService,
    private router: Router,
    private contentService: ContentService,
  ) {
    this.uploadIsInProgress = true;

    //this.ga.trackView('Home')

    contentService.articleTypes.subscribe(links => {
      this.links = links;
      this.links.sort((a, b) => {
        return a.fields.weight - b.fields.weight;
      });
    });

    this.uploadIsInProgress = false;
  }

  open(link) {
    this.router.navigate(['category', link.sys.id]);
  }

  async home() {
    this.homeLinkService.home();
  }

  async sharing() {
    this.homeLinkService.sharing();
  }
}
