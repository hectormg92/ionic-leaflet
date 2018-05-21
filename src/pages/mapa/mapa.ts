import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare const L:any;

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  
  map;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    
    this.map = L.map('mapid')

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    let latlon = this.navParams.get('coord');
    let info   = this. navParams.get('info');
    
    L.marker(latlon).addTo(this.map).bindPopup(info);

    this.map.setView(latlon, 18);
  }

}
