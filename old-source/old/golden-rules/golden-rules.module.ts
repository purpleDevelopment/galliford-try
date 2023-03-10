import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GoldenRulesPage } from './golden-rules.page';

const routes: Routes = [
  {
    path: '',
    component: GoldenRulesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GoldenRulesPage],
})
export class GoldenRulesPageModule {
}
