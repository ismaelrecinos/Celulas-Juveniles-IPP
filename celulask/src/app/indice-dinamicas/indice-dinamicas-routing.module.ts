import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceDinamicasPage } from './indice-dinamicas.page';

const routes: Routes = [
  {
    path: '',
    component: IndiceDinamicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiceDinamicasPageRoutingModule {}
