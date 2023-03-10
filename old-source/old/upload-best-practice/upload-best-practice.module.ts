import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadBestPracticePage } from './upload-best-practice.page';

const routes: Routes = [
  {
    path: '',
    component: UploadBestPracticePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UploadBestPracticePage],
})
export class UploadBestPracticePageModule {
}
