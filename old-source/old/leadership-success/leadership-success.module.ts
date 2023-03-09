import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeadershipSuccessPage } from './leadership-success.page';

const routes: Routes = [
  {
    path: '',
    component: LeadershipSuccessPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LeadershipSuccessPage],
})
export class LeadershipSuccessPageModule {
}
