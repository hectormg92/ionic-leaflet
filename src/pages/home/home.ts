import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toggleValue: boolean = false;

  mapa:any = MapaPage;

  constructor(public navCtrl: NavController) {

  }


  change_toggle(data){

    console.log(data);

  }

}
