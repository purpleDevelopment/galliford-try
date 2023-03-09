import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolsOverviewPage } from './tools-overview.page';

const routes: Routes = [
  {
    path: '',
    component: ToolsOverviewPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ToolsOverviewPage],
})
export class ToolsOverviewPageModule {
}
