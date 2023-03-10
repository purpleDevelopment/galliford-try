import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolsAndResourcesPage } from './tools-and-resources.page';

const routes: Routes = [
  {
    path: '',
    component: ToolsAndResourcesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ToolsAndResourcesPage],
})
export class ToolsAndResourcesPageModule {
}
