import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiceDinamicasPageRoutingModule } from './indice-dinamicas-routing.module';

import { IndiceDinamicasPage } from './indice-dinamicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiceDinamicasPageRoutingModule
  ],
  declarations: [IndiceDinamicasPage]
})
export class IndiceDinamicasPageModule {}
