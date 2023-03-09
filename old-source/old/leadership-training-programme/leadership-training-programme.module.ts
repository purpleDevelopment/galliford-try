import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeadershipTrainingProgrammePage } from './leadership-training-programme.page';

const routes: Routes = [
  {
    path: '',
    component: LeadershipTrainingProgrammePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LeadershipTrainingProgrammePage],
})
export class LeadershipTrainingProgrammePageModule {
}
