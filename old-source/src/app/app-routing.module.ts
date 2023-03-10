import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-listing',
    pathMatch: 'full',
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'page2', loadChildren: './pages/page2/page2.module#Page2PageModule' },
  { path: 'page3', loadChildren: './pages/page3/page3.module#Page3PageModule' },
  { path: 'page4', loadChildren: './pages/page4/page4.module#Page4PageModule' },
  { path: 'page-listing', loadChildren: './pages/page-listing/page-listing.module#PageListingPageModule' },
  { path: 'category/:categoryId', loadChildren: './pages/page-category/page-category.module#CategoryPageModule' },
  { path: 'article/:articleId', loadChildren: './pages/article/article.module#ArticlePageModule' },
  { path: 'best-practice/:articleId', loadChildren: './pages/best-practice/best-practice.module#BestPracticePageModule' },
  { path: 'best-practice', loadChildren: './pages/best-practices/best-practices.module#BestPracticesPageModule' },
  { path: 'intro', loadChildren: './pages/intro/intro.module#IntroPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'upload-best-practice', loadChildren: './pages/upload-best-practice/upload-best-practice.module#UploadBestPracticePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
