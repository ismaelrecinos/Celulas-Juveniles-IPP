import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiceAlabanzasPageRoutingModule } from './indice-alabanzas-routing.module';

import { IndiceAlabanzasPage } from './indice-alabanzas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiceAlabanzasPageRoutingModule
  ],
  declarations: [IndiceAlabanzasPage]
})
export class IndiceAlabanzasPageModule {}
