import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndustryLeadingHssPage } from './industry-leading-hss.page';

const routes: Routes = [
  {
    path: '',
    component: IndustryLeadingHssPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [IndustryLeadingHssPage],
})
export class IndustryLeadingHssPageModule {
}
