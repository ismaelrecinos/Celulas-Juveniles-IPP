import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarDinamicaPage } from './mostrar-dinamica.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarDinamicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarDinamicaPageRoutingModule {}
