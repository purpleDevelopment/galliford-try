import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CommunicationBoardsPage } from './communication-boards.page';

const routes: Routes = [
  {
    path: '',
    component: CommunicationBoardsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CommunicationBoardsPage],
})
export class CommunicationBoardsPageModule {
}
