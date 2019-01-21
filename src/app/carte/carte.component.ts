import { Component, OnInit } from '@angular/core';
import jsonMarkers from "../markers.json";
import * as ci from "../constIconeCarte";
import * as esri from 'esri-leaflet';

declare let L;

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {	  
    var map = L.map('map').setView([48.856614, 2.352222], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
	
	// @@ts-ignore
	var m = jsonMarkers.markers;
	
	for ( var i=0; i < m.length; i++ )
	{
		var htmlPopup = m[i].nom + 
						"<br>Concesionnaire " +  m[i].marque +
						"<br><a href='" + m[i].url + "' target='_blank' >Site web</a>" + 
						"<br>" + m[i].tel +
						"<br>" + m[i].adresse;
						
		L.marker( [m[i].lat, m[i].lng], {icon: ci.getMarqueIcone(m[i].marque)} )
			.bindPopup(htmlPopup)
			.addTo( map );
	}
	
	const esriLayer = esri.basemapLayer('Topographic');
    map.addLayer(esriLayer);
  }

}
