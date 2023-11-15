import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliaEnUnAnioPageRoutingModule } from './biblia-en-un-anio-routing.module';

import { BibliaEnUnAnioPage } from './biblia-en-un-anio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliaEnUnAnioPageRoutingModule
  ],
  declarations: [BibliaEnUnAnioPage]
})
export class BibliaEnUnAnioPageModule {}
