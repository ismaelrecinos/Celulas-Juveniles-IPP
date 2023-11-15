import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarLibroPageRoutingModule } from './mostrar-libro-routing.module';

import { MostrarLibroPage } from './mostrar-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarLibroPageRoutingModule
  ],
  declarations: [MostrarLibroPage]
})
export class MostrarLibroPageModule {}
