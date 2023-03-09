import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BestPracticePage } from './best-practice.page';

const routes: Routes = [
  {
    path: '',
    component: BestPracticePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BestPracticePage],
})
export class BestPracticePageModule {
}
