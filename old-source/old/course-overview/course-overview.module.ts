import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CourseOverviewPage } from './course-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CourseOverviewPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CourseOverviewPage],
})
export class CourseOverviewPageModule {
}
