import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarAlabanzaPageRoutingModule } from './mostrar-alabanza-routing.module';

import { MostrarAlabanzaPage } from './mostrar-alabanza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarAlabanzaPageRoutingModule
  ],
  declarations: [MostrarAlabanzaPage]
})
export class MostrarAlabanzaPageModule {}
