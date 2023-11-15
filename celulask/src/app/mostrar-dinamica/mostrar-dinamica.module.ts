import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarDinamicaPageRoutingModule } from './mostrar-dinamica-routing.module';

import { MostrarDinamicaPage } from './mostrar-dinamica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarDinamicaPageRoutingModule
  ],
  declarations: [MostrarDinamicaPage]
})
export class MostrarDinamicaPageModule {}
