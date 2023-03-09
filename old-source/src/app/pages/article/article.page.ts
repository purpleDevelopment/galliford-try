import { Component } from '@angular/core';
import { HomeLinkService } from '../../services/home-link/home-link.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../services/content-service/content.service';
import marked from 'marked';
import { DeviceDetectorService } from 'ngx-device-detector';
//import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage {
  article: any = {};
  deviceInfo = null;
  isIOS10 = false;

  constructor(
  //  private ga: GoogleAnalytics,
    private homeLinkService: HomeLinkService,
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceDetectorService,
    private contentService: ContentService,
  ) {
    this.route.params.subscribe(async params => {
      contentService.articles.subscribe(results => {
        this.article = results.filter(article => {
          return article.sys.id === params.articleId;
        })[0] || {};
        if (!this.article.fields) {
          return;
        }

        var md = marked.setOptions({
          renderer: new marked.Renderer(),
          sanitize: true,
          smartLists: true,
          smartypants: true,
        });

        this.article.content = md.parse(this.article.fields.articleMarkup);
        //    this.article.content = documentToHtmlString(this.article.content);


       //this.ga.trackView(this.article.content.title);

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
