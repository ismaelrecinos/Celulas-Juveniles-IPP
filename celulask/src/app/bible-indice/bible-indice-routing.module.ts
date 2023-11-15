import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibleIndicePage } from './bible-indice.page';

const routes: Routes = [
  {
    path: '',
    component: BibleIndicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibleIndicePageRoutingModule {}
