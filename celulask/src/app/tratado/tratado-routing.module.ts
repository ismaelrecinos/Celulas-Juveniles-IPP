import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TratadoPage } from './tratado.page';

const routes: Routes = [
  {
    path: '',
    component: TratadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratadoPageRoutingModule {}
