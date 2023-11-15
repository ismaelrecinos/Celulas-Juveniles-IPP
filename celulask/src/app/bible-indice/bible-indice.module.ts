import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibleIndicePageRoutingModule } from './bible-indice-routing.module';

import { BibleIndicePage } from './bible-indice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibleIndicePageRoutingModule
  ],
  declarations: [BibleIndicePage]
})
export class BibleIndicePageModule {}
