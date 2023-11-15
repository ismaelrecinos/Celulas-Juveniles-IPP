import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarLibroPage } from './mostrar-libro.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarLibroPageRoutingModule {}
