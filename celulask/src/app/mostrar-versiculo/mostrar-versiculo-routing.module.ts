import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarVersiculoPage } from './mostrar-versiculo.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarVersiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarVersiculoPageRoutingModule {}
