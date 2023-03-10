import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SiteSafetyCharterPage } from './site-safety-charter.page';

const routes: Routes = [
  {
    path: '',
    component: SiteSafetyCharterPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SiteSafetyCharterPage],
})
export class SiteSafetyCharterPageModule {
}
