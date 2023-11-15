import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndiceCorosPage } from './indice-coros.page';

const routes: Routes = [
  {
    path: '',
    component: IndiceCorosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiceCorosPageRoutingModule {}
