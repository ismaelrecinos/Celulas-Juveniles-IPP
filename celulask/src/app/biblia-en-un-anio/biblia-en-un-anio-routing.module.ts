import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliaEnUnAnioPage } from './biblia-en-un-anio.page';

const routes: Routes = [
  {
    path: '',
    component: BibliaEnUnAnioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliaEnUnAnioPageRoutingModule {}
