import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarDevocionalPage } from './mostrar-devocional.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarDevocionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarDevocionalPageRoutingModule {}
