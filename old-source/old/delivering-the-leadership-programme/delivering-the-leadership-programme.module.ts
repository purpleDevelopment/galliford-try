import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliveringTheLeadershipProgrammePage } from './delivering-the-leadership-programme.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveringTheLeadershipProgrammePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DeliveringTheLeadershipProgrammePage],
})
export class DeliveringTheLeadershipProgrammePageModule {
}
