import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SafetyRewardSchemesPage } from './safety-reward-schemes.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyRewardSchemesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SafetyRewardSchemesPage],
})
export class SafetyRewardSchemesPageModule {
}
