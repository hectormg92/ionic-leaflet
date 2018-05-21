import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events: any[] = [
      {
        nom: 'Partida Pilota',
        info: 'Final a llargues del campionat de Pilota Valenciana',
        geom:{
          type: 'point',
          coord: [38.793502, 0.036999]
        }
      },
      {
        nom: "Partida d'escacs",
        info: "Partida simultànea d'escacs a càrrec del mestre Paco Porres",
        geom:{
          type: 'point',
          coord: [38.794533, 0.034692]
        }
      }
  ]

  mapa:any = MapaPage;

  constructor(public navCtrl: NavController) {

    

  }

}
