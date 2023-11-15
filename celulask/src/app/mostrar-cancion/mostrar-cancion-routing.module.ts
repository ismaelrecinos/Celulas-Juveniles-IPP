import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarCancionPage } from './mostrar-cancion.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarCancionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarCancionPageRoutingModule {}
