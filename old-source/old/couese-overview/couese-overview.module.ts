import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoueseOverviewPage } from './couese-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CoueseOverviewPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CoueseOverviewPage],
})
export class CoueseOverviewPageModule {
}
