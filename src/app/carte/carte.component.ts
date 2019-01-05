import { Component, OnInit } from '@angular/core';
import * as jsonMarkers from "../markers.json";

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

L.marker([48.856614, 2.352222]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
	
	var m = jsonMarkers.markers;
	
	for ( var i=0; i < m.length; i++ )
	{
		var htmlPopup = m[i].nom + 
						"<br>Concesionnaire " +  m[i].marque +
						"<br><a href='" + m[i].url + "' target='_blank' >Site web</a>" + 
						"<br>" + m[i].tel +
						"<br>" + m[i].adresse;
						
		L.marker( [m[i].lat, m[i].lng] )
			.bindPopup(htmlPopup)
			.addTo( map );
	}
  }

}
