import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiceBibliaPageRoutingModule } from './indice-biblia-routing.module';

import { IndiceBibliaPage } from './indice-biblia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiceBibliaPageRoutingModule
  ],
  declarations: [IndiceBibliaPage]
})
export class IndiceBibliaPageModule {}
