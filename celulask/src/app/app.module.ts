import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AlabanzaService } from './indice-alabanzas/alabanza.service';
import { CorosService } from './indice-coros/coros.service';
import { BibliaService } from './indice-biblia/biblia.service';
import { LeccionesService } from './indice-lecciones/lecciones.service';
import { CancionesService } from './indice-canciones/canciones.service';
import { BibleService } from './bible-indice/bible.service';
import { CalendarizacionService } from './biblia-en-un-anio/calendarizacion.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              {provide: AlabanzaService},
              {provide: CorosService},
              {provide: BibliaService},
              {provide: LeccionesService},
              {provide: CancionesService},
              {provide: BibleService},
              {provide: CalendarizacionService},
              {provide: SocialSharing},
              {provide: File},
              {provide: FileOpener}],
  bootstrap: [AppComponent],
})
export class AppModule {}
