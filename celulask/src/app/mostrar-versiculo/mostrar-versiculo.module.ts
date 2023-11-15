import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarVersiculoPageRoutingModule } from './mostrar-versiculo-routing.module';

import { MostrarVersiculoPage } from './mostrar-versiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarVersiculoPageRoutingModule
  ],
  declarations: [MostrarVersiculoPage]
})
export class MostrarVersiculoPageModule {}
