import { Component } from '@angular/core';
import { ContentService } from '../../services/content-service/content.service';
import { ActivatedRoute } from '@angular/router';
import marked from 'marked';

import { HomeLinkService } from '../../services/home-link/home-link.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})



export class AboutPage {
  static: any = {};
  deviceInfo = null;
  isIOS10 = false;

  constructor(
    private homeLinkService: HomeLinkService,
    private route: ActivatedRoute,
    private deviceService: DeviceDetectorService,
    private contentService: ContentService,
  ) {
    this.route.params.subscribe(async params => {
      contentService.staticPages.subscribe(results => {
        
        var md = marked.setOptions({
          renderer: new marked.Renderer(),
          sanitize: true,
          smartLists: true,
          smartypants: true,
        });

         this.static.title = results[0].fields.pageTitle
        this.static.content = md.parse(results[0].fields.pageContent);
      });
    });


    this.deviceInfo = this.deviceService.getDeviceInfo();

    if (this.deviceInfo.os == 'iOS') {
      if (this.deviceInfo.os_version < 11) {
        this.isIOS10 = true;
      }
    }
  }

  async home() {
    this.homeLinkService.home();
  }
}
