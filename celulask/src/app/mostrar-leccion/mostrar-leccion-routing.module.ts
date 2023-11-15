import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarLeccionPage } from './mostrar-leccion.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarLeccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarLeccionPageRoutingModule {}
