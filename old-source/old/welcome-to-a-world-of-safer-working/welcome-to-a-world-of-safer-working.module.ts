import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WelcomeToAWorldOfSaferWorkingPage } from './welcome-to-a-world-of-safer-working.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeToAWorldOfSaferWorkingPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WelcomeToAWorldOfSaferWorkingPage],
})
export class WelcomeToAWorldOfSaferWorkingPageModule {
}
