import { Component, OnInit } from '@angular/core';
import * as jsonMarkers from "../markers.json";
import * as ci from "../constIconeCarte";
import * as esri from 'esri-leaflet';

declare let L;

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  private markers = new Array();
  public map;

  constructor() { }
  
  ngOnInit() {
	  
	this.map = L.map('map').setView([48.856614, 2.352222], 12);
  
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(this.map);
		
	for ( var i = 1; i <= Object.keys(jsonMarkers).length; i++ )
	{
		var htmlPopup = jsonMarkers[i].nom + 
						"<br>Concesionnaire " +  jsonMarkers[i].marque +
						"<br><a href='" + jsonMarkers[i].url + "' target='_blank' >Site web</a>" + 
						"<br>" + jsonMarkers[i].tel +
						"<br>" + jsonMarkers[i].adresse;
						
		var marker = L.marker( [jsonMarkers[i].lat, jsonMarkers[i].lng], {icon: ci.getMarqueIcone(jsonMarkers[i].marque)} )
			.bindPopup(htmlPopup);
		this.markers[i] = [];
		this.markers[i]["marker"] = marker;
		this.markers[i]["marque"] = jsonMarkers[i].marque;
	}
	
	for (var i = 1; i < this.markers.length; i++) {
		this.markers[i]["marker"].addTo(this.map);
	}
	
	const esriLayer = esri.basemapLayer('Topographic');
    this.map.addLayer(esriLayer);
  }
  
  miseAJourCarte(event) {
	  if (event.target.checked) {
		this.afficherMarque(event.target.value);
	  }
	  else {
		this.retirerMarque(event.target.value);
	  }
  }
  
  afficherMarque(marqueVehicule: string) {
	for (var i = 1; i < this.markers.length; i++) {
		if (this.markers[i]["marque"] == marqueVehicule) {
			this.markers[i]["marker"].addTo(this.map);
		}
	}
  }
  
  retirerMarque(marqueVehicule: string) {
	for (var i = 1; i < this.markers.length; i++) {
		if (this.markers[i]["marque"] == marqueVehicule) {
			this.map.removeLayer(this.markers[i]["marker"]);
		}
	}
  }
  
  rechercheParAdresse(adresse: string) {
	var resultat = null;
    var scriptUrl = location.protocol + '//nominatim.openstreetmap.org/search?format=json&q=' + adresse;
    $.ajax({
        url: scriptUrl,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            resultat = data;
        } 
    });
	if (resultat.length != 0) {
		this.map.setView([resultat[0].lat, resultat[0].lon], 14);
	}
  }
  
  carteParDefaut() {
	 this.map.setView([48.856614, 2.352222], 12);
	 (<HTMLInputElement>document.getElementById("adresse")).value = "";
  }

}
