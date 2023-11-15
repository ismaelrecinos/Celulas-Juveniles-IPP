import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarCorosPage } from './mostrar-coros.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarCorosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarCorosPageRoutingModule {}
