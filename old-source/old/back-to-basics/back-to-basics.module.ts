import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BackToBasicsPage } from './back-to-basics.page';

const routes: Routes = [
  {
    path: '',
    component: BackToBasicsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BackToBasicsPage],
})
export class BackToBasicsPageModule {
}
