import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GoldenRulesAndPage } from './golden-rules-and.page';

const routes: Routes = [
  {
    path: '',
    component: GoldenRulesAndPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GoldenRulesAndPage],
})
export class GoldenRulesAndPageModule {
}
