import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiceLeccionesPageRoutingModule } from './indice-lecciones-routing.module';

import { IndiceLeccionesPage } from './indice-lecciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiceLeccionesPageRoutingModule
  ],
  declarations: [IndiceLeccionesPage]
})
export class IndiceLeccionesPageModule {}
