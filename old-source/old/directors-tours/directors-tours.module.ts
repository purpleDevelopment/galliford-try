import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DirectorsToursPage } from './directors-tours.page';

const routes: Routes = [
  {
    path: '',
    component: DirectorsToursPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DirectorsToursPage],
})
export class DirectorsToursPageModule {
}
