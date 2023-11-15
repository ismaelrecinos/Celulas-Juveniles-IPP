import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice-dinamicas',
  templateUrl: './indice-dinamicas.page.html',
  styleUrls: ['./indice-dinamicas.page.scss'],
})
export class IndiceDinamicasPage implements OnInit {
  items;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initializeItems();
  }

  pushPage(page:String){
  let id = this.items.indexOf(page);
  if(id != 38 && id != 118){
    this.router.navigate(['mostrar-dinamica',id]);
  }  
  }

  initializeItems() {
    this.items = [
      '1. Coronemos al rey',
      '2. El rey de los elementos',
      '3. Me pica',
      '4. El náufrago',
      '5. Entrelazados',
      '6. Solo no puedes',
      '7. Rueda de nombres',
      '8. Rasgos en común',
      '9. La pelota',
      '10. Quemazón, reventazón',
      '11. La silla vacía',
      '12. Las lanchas',
      '13. Los refranes',
      '14. Las estatuas de marfil',
      '15. Los animales',
      '16. Hilos de colores',
      '17. Sonríe si me quieres',
      '18. El leñador o la leñadora',
      '19. La pelota cooperativa',
      '20. La pelota enrodillada',
      '21. Orden en la banca',
      '22. Buscando cola',
      '23. El túnel humano',
      '24. Rompecabezas',
      '25. Pelota caliente',
      '26. El fútbol de manos',
      '27. La reja',
      '28. El cuchicheo',
      '29. La espiral',
      '30. La rueda enrodillada',
      '31. Las olas'
      ];
  }

}
