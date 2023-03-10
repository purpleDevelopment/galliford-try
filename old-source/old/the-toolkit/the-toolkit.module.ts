import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TheToolkitPage } from './the-toolkit.page';

const routes: Routes = [
  {
    path: '',
    component: TheToolkitPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TheToolkitPage],
})
export class TheToolkitPageModule {
}
