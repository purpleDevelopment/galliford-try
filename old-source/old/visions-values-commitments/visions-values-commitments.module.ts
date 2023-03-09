import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisionsValuesCommitmentsPage } from './visions-values-commitments.page';

const routes: Routes = [
  {
    path: '',
    component: VisionsValuesCommitmentsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VisionsValuesCommitmentsPage],
})
export class VisionsValuesCommitmentsPageModule {
}
