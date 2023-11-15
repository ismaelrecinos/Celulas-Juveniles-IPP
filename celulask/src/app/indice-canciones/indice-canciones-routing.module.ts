import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceCancionesPage } from './indice-canciones.page';

const routes: Routes = [
  {
    path: '',
    component: IndiceCancionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiceCancionesPageRoutingModule {}
