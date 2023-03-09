import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OurSafetyVisionPage } from './our-safety-vision.page';

const routes: Routes = [
  {
    path: '',
    component: OurSafetyVisionPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [OurSafetyVisionPage],
})
export class OurSafetyVisionPageModule {
}
