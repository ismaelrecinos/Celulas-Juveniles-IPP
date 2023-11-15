import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiceCorosPageRoutingModule } from './indice-coros-routing.module';

import { IndiceCorosPage } from './indice-coros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiceCorosPageRoutingModule
  ],
  declarations: [IndiceCorosPage]
})
export class IndiceCorosPageModule {}
