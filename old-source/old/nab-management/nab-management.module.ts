import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NabManagementPage } from './nab-management.page';

const routes: Routes = [
  {
    path: '',
    component: NabManagementPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [NabManagementPage],
})
export class NabManagementPageModule {
}
