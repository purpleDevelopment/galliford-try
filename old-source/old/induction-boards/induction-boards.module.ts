import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InductionBoardsPage } from './induction-boards.page';

const routes: Routes = [
  {
    path: '',
    component: InductionBoardsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [InductionBoardsPage],
})
export class InductionBoardsPageModule {
}
