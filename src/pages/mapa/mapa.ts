import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


declare const L:any;
declare const prov:any;

declare const albergues_turisticos:any;
declare const alojamientos_rurales:any;
declare const alojamientos_turisticos:any;
declare const campings:any;
declare const hoteles:any;




@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  
  map;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {

    let greenIcon = L.icon({
      options: {
        iconUrl: 'assets/icon/marker-icon-green.png',
        shadowUrl: 'assets/icon/marker-shadow.png'
      }
    })
    
    this.map = L.map('mapid')

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    let latlon = [42.99, -2.59];

    this.map.setView(latlon, 8);
    
    var lim_style = {
      "fillColor": "rgba(0,0,0,0)",
      "color": "#0B610B",
      "opacity": 1
    };
  
    let prov_feature = L.geoJSON(prov, {
      style: lim_style
    }).addTo(this.map);


    var clusMarker = new L.markerClusterGroup({
      //disableClusteringAtZoom: 15,
      maxClusterRadius: 100,
      polygonOptions: {
          color: "#4b088a",
          weight: 3,
          opacity: 1,
          fillOpacity: 0.3
        }
    });


    if (this.navParams.get("toggle_alb_tur")){


      let alb_tur = L.geoJSON(albergues_turisticos,{
        onEachFeature: function (feature, alb_tur) {
          alb_tur.bindPopup(feature.properties.documentname)
        },
        icon: greenIcon        
      })
      clusMarker.addLayer(alb_tur);
    }
    
    if (this.navParams.get("toggle_alo_tur")){
      let alo_tur = L.geoJSON(alojamientos_turisticos,{
        onEachFeature: function (feature, alo_tur) {
          alo_tur.bindPopup(feature.properties.documentname)
        }
      })
      clusMarker.addLayer(alo_tur);
    }

    if (this.navParams.get("toggle_alo_rur")){
      let alo_rur = L.geoJSON(alojamientos_rurales, {
        onEachFeature: function (feature, alo_rur) {
          alo_rur.bindPopup(feature.properties.documentname)
        }
      })
      clusMarker.addLayer(alo_rur);
    }

    if (this.navParams.get("toggle_camp")){
      let camp = L.geoJSON(campings, {
        onEachFeature: function (feature, camp) {
          camp.bindPopup(feature.properties.documentname)
        }
      })
      clusMarker.addLayer(camp);
    }
    
    if (this.navParams.get("toggle_hot")){
      let hot = L.geoJSON(hoteles, {
        onEachFeature: function (feature, hot) {
          hot.bindPopup(feature.properties.documentname)
        }
      })
      clusMarker.addLayer(hot);
    }


    clusMarker.addTo(this.map);

    

  }

}
