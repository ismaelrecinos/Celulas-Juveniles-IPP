import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarCorosPageRoutingModule } from './mostrar-coros-routing.module';

import { MostrarCorosPage } from './mostrar-coros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarCorosPageRoutingModule
  ],
  declarations: [MostrarCorosPage]
})
export class MostrarCorosPageModule {}
