import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SafetyShutdownInitiativePage } from './safety-shutdown-initiative.page';

const routes: Routes = [
  {
    path: '',
    component: SafetyShutdownInitiativePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SafetyShutdownInitiativePage],
})
export class SafetyShutdownInitiativePageModule {
}
