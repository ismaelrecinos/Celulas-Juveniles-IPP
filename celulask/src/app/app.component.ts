import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Santa Biblia RV1960', url: '/indice-biblia', icon: 'book' },
    { title: 'Holy Bible', url: '/bible-indice', icon: 'bookmarks' },
    { title: 'Biblia en un Año', url: '/biblia-en-un-anio', icon: 'calendar' },
    { title: 'Himnario de Alabanzas', url: '/indice-alabanzas', icon: 'musical-note' },
    { title: 'Himnario de Coros', url: '/indice-coros', icon: 'musical-notes' },
    { title: 'Cancionero', url: '/indice-canciones', icon: 'headset' },
    { title: 'Discipulado 1.A.1', url: '/indice-lecciones', icon: 'document' },
    { title: 'Guía Dinámicas', url: '/indice-dinamicas', icon: 'american-football' },
    { title: 'Tratado Evangelístico', url: '/tratado', icon: 'people' },
    { title: 'Acerca De', url: '/acerca-de', icon: 'color-palette' },
  ];
  constructor() {}
}
