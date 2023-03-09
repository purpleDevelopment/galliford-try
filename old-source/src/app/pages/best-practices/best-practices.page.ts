import { Component } from '@angular/core';
import { HomeLinkService } from '../../services/home-link/home-link.service';
import { ContentService } from '../../services/content-service/content.service';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-best-practices',
  templateUrl: './best-practices.page.html',
  styleUrls: ['./best-practices.page.scss'],
})
export class BestPracticesPage {
  bestPractices: any = [];
  buTypes: any = [];
  toolsTypes: any = [];
  detailsTypes: any = [];
  filtersOpened = false;
  hideMe = false;
  sortOrder: string = null;
  deviceInfo = null;
  isIOS10 = false;
  filters = {
    buTypes: [],
    toolsTypes: [],
    detailsTypes: [],
  };


  constructor(
    private homeLinkService: HomeLinkService,
    private deviceService: DeviceDetectorService,
    private contentService: ContentService,
    private router: Router,
  ) {
    contentService.buTypes.subscribe(buTypes => this.buTypes = buTypes);
    contentService.toolsTypes.subscribe(toolsTypes => this.toolsTypes = toolsTypes);
    contentService.detailsTypes.subscribe(detailsTypes => this.detailsTypes = detailsTypes);
    contentService.bestPractices.subscribe(bestPractices => this.bestPractices = bestPractices);

    this.deviceInfo = this.deviceService.getDeviceInfo();

    if (this.deviceInfo.os == 'iOS') {
      if (this.deviceInfo.os_version < 11) {
        this.isIOS10 = true;
      }
    }
  }

  home() {
    this.homeLinkService.home();
  }

  resetFilters() {
    this.filters.buTypes = null;
    this.filters.toolsTypes = null;
    this.filters.detailsTypes = null;
  }

  switchFilters() {
    this.filtersOpened = !this.filtersOpened;
  }

  sortArticles() {
    if (this.sortOrder === 'date-asc') {
      this.bestPractices.sort((a, b) => {
        return ('' + a.sys.createdAt).localeCompare(b.sys.createdAt);
      });
    } else if (this.sortOrder === 'date-desc') {
      this.bestPractices.sort((a, b) => {
        return ('' + b.sys.createdAt).localeCompare(a.sys.createdAt);
      });
    } else {
      this.bestPractices.sort((a, b) => {
        return ('' + a.fields.title).localeCompare(b.fields.title);
      });
    }
  }

  setFilters() {
    this.bestPractices = this.contentService.bestPractices.value.filter(article => {
      return !((this.filters.buTypes && this.filters.buTypes.length && this.filters.buTypes.indexOf(article.fields.businessUnit && article.fields.businessUnit.sys.id) < 0) ||
        (this.filters.toolsTypes && this.filters.toolsTypes.length && this.filters.toolsTypes.indexOf(article.fields.toolsType && article.fields.toolsType.sys.id) < 0) ||
        (this.filters.detailsTypes && this.filters.detailsTypes.length && this.filters.detailsTypes.indexOf(article.fields.detailType && article.fields.detailType.sys.id) < 0));
    });
    this.filtersOpened = !this.filtersOpened;
  }

  open(link) {
    this.router.navigate(['best-practice', link.sys.id]);
  }

  hide(id) {
    this.hideMe = true;
  }
}
