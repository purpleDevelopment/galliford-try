import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolboxTalksPage } from './toolbox-talks.page';

const routes: Routes = [
  {
    path: '',
    component: ToolboxTalksPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ToolboxTalksPage],
})
export class ToolboxTalksPageModule {
}
