import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tratado',
    loadChildren: () => import('./tratado/tratado.module').then( m => m.TratadoPageModule)
  },
  {
    path: 'indice-canciones',
    loadChildren: () => import('./indice-canciones/indice-canciones.module').then( m => m.IndiceCancionesPageModule)
  },
  {
    path: 'indice-dinamicas',
    loadChildren: () => import('./indice-dinamicas/indice-dinamicas.module').then( m => m.IndiceDinamicasPageModule)
  },
  {
    path: 'indice-lecciones',
    loadChildren: () => import('./indice-lecciones/indice-lecciones.module').then( m => m.IndiceLeccionesPageModule)
  },
  {
    path: 'indice-alabanzas',
    loadChildren: () => import('./indice-alabanzas/indice-alabanzas.module').then( m => m.IndiceAlabanzasPageModule)
  },
  {
    path: 'indice-coros',
    loadChildren: () => import('./indice-coros/indice-coros.module').then( m => m.IndiceCorosPageModule)
  },
  {
    path: 'bible-indice',
    loadChildren: () => import('./bible-indice/bible-indice.module').then( m => m.BibleIndicePageModule)
  },
  {
    path: 'indice-biblia',
    loadChildren: () => import('./indice-biblia/indice-biblia.module').then( m => m.IndiceBibliaPageModule)
  },
  {
    path: 'mostrar-versiculo/:lib/:cap/:versiculo/:biblia',
    loadChildren: () => import('./mostrar-versiculo/mostrar-versiculo.module').then( m => m.MostrarVersiculoPageModule)
  },
  {
    path: 'mostrar-alabanza/:id',
    loadChildren: () => import('./mostrar-alabanza/mostrar-alabanza.module').then( m => m.MostrarAlabanzaPageModule)
  },
  {
    path: 'mostrar-coros/:id',
    loadChildren: () => import('./mostrar-coros/mostrar-coros.module').then( m => m.MostrarCorosPageModule)
  },
  {
    path: 'mostrar-libro/:lib/:cap/:biblia',
    loadChildren: () => import('./mostrar-libro/mostrar-libro.module').then( m => m.MostrarLibroPageModule)
  },
  {
    path: 'mostrar-leccion/:id',
    loadChildren: () => import('./mostrar-leccion/mostrar-leccion.module').then( m => m.MostrarLeccionPageModule)
  },
  {
    path: 'mostrar-cancion/:id',
    loadChildren: () => import('./mostrar-cancion/mostrar-cancion.module').then( m => m.MostrarCancionPageModule)
  },
  {
    path: 'mostrar-dinamica/:id',
    loadChildren: () => import('./mostrar-dinamica/mostrar-dinamica.module').then( m => m.MostrarDinamicaPageModule)
  },
  {
    path: 'biblia-en-un-anio',
    loadChildren: () => import('./biblia-en-un-anio/biblia-en-un-anio.module').then( m => m.BibliaEnUnAnioPageModule)
  },
  {
    path: 'mostrar-devocional/:tit/:vers/:cont',
    loadChildren: () => import('./mostrar-devocional/mostrar-devocional.module').then( m => m.MostrarDevocionalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
