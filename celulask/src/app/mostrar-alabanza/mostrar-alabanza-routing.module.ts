import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarAlabanzaPage } from './mostrar-alabanza.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarAlabanzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarAlabanzaPageRoutingModule {}
