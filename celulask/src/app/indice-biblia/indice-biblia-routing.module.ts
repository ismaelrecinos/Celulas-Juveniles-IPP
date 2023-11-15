import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceBibliaPage } from './indice-biblia.page';

const routes: Routes = [
  {
    path: '',
    component: IndiceBibliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiceBibliaPageRoutingModule {}
