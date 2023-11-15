import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceLeccionesPage } from './indice-lecciones.page';

const routes: Routes = [
  {
    path: '',
    component: IndiceLeccionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiceLeccionesPageRoutingModule {}
