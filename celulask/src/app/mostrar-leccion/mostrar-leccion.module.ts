import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarLeccionPageRoutingModule } from './mostrar-leccion-routing.module';

import { MostrarLeccionPage } from './mostrar-leccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarLeccionPageRoutingModule
  ],
  declarations: [MostrarLeccionPage]
})
export class MostrarLeccionPageModule {}
