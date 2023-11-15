import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TratadoPageRoutingModule } from './tratado-routing.module';

import { TratadoPage } from './tratado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TratadoPageRoutingModule
  ],
  declarations: [TratadoPage]
})
export class TratadoPageModule {}
