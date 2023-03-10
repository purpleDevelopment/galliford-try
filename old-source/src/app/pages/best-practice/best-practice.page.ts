import { Component } from '@angular/core';
import { HomeLinkService } from '../../services/home-link/home-link.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../services/content-service/content.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-best-practice',
  templateUrl: './best-practice.page.html',
  styleUrls: ['./best-practice.page.scss'],
})
export class BestPracticePage {
  article: any = {};
  deviceInfo = null;
  isIOS10 = false;

  constructor(
    private homeLinkService: HomeLinkService,
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceDetectorService,
    private contentService: ContentService,
  ) {
    this.route.params.subscribe(async params => {
      contentService.bestPractices.subscribe(results => {
        this.article = results.filter(article => {
          return article.sys.id === params.articleId;
        })[0] || {};
        if (!this.article || !this.article.fields) {
          return;
        }

        //console.log(results);
        this.article.content = this.article.fields.comments;
        this.deviceInfo = this.deviceService.getDeviceInfo();

        if (this.deviceInfo.os == 'iOS') {
          if (this.deviceInfo.os_version < 11) {
            this.isIOS10 = true;
          }
        }
      });
    });
  }

  async home() {
    this.homeLinkService.home();
  }
}
