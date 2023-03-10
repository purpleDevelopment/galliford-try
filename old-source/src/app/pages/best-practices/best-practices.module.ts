import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BestPracticesPage } from './best-practices.page';

const routes: Routes = [
  {
    path: '',
    component: BestPracticesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BestPracticesPage],
})
export class BestPracticesPageModule {
}
