import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WhatIsNabPage } from './what-is-nab.page';

const routes: Routes = [
  {
    path: '',
    component: WhatIsNabPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WhatIsNabPage],
})
export class WhatIsNabPageModule {
}
