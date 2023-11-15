import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarCancionPageRoutingModule } from './mostrar-cancion-routing.module';

import { MostrarCancionPage } from './mostrar-cancion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarCancionPageRoutingModule
  ],
  declarations: [MostrarCancionPage]
})
export class MostrarCancionPageModule {}
