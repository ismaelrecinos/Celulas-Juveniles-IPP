import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiceCancionesPageRoutingModule } from './indice-canciones-routing.module';

import { IndiceCancionesPage } from './indice-canciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiceCancionesPageRoutingModule
  ],
  declarations: [IndiceCancionesPage]
})
export class IndiceCancionesPageModule {}
