import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarDevocionalPageRoutingModule } from './mostrar-devocional-routing.module';

import { MostrarDevocionalPage } from './mostrar-devocional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarDevocionalPageRoutingModule
  ],
  declarations: [MostrarDevocionalPage]
})
export class MostrarDevocionalPageModule {}
