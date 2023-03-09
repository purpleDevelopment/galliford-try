import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content-service/content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeLinkService } from '../../services/home-link/home-link.service';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.page.html',
  styleUrls: ['./page-category.page.scss'],
})
export class CategoryPage {
  links: any = [];

  constructor(
    private homeLinkService: HomeLinkService,
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService,
  ) {
    this.route.params.subscribe(async params => {
      contentService.articles.subscribe(links => {
        this.links = links;
        this.links.sort((a, b) => {
          return a.fields.weight - b.fields.weight;
        });
        this.links = this.links.filter(article => {

          return article.fields.articleCategory.sys.id === params.categoryId;
        });
      });
    });
  }

  open(link) {
    this.router.navigate(['article', link.sys.id]);
  }

  async home() {
    this.homeLinkService.home();
  }
}
