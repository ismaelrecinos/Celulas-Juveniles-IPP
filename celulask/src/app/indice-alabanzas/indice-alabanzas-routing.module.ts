import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceAlabanzasPage } from './indice-alabanzas.page';

const routes: Routes = [
  {
    path: '',
    component: IndiceAlabanzasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiceAlabanzasPageRoutingModule {}
