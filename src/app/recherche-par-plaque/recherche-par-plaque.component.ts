import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import "../../assets/js/papaparse.min.js";
import { csv } from "../bdd_voitures";
import * as fonc from "../fonction";
import * as constantes from "../constantes";
import {default as papa} from "papaparse";

//const papa = require('papaparse');
const csvData = papa.parse(csv).data;

@Component({
  selector: 'app-recherche-par-plaque',
  templateUrl: './recherche-par-plaque.component.html',
  styleUrls: ['./recherche-par-plaque.component.css']
})
export class RechercheParPlaqueComponent implements OnInit {

  plaqueIm = 'plaqueIm';
  dateFirst = 'dateFirst';
  marque = 'marque';
  modele = 'modele';
  moteur = 'moteur';
  type = 'type';
  dateLast = 'dateLast';

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
	const plaque = form.value['plaque']
	const res = csvData.indexOf(plaque);
	var index;
	for( var i = 0; i < csvData.length; i++ ) {
		index = -1
		if( csvData[i][0] == plaque ) {
			index = i;
			break;
		}
	}
	
	var dataBesoinClient = csvData[index];
	dataBesoinClient[constantes.INDEX_IMPOSABLE] = false;
	dataBesoinClient[constantes.INDEX_TYPE_VEHICULE_VOULU] = "essence";
	dataBesoinClient[constantes.INDEX_ETAT_VEHICULE_VOULU] = "neuf";
	dataBesoinClient[constantes.INDEX_GRAND_ROULEUR] = false;
		
	console.log(fonc.getPrime(dataBesoinClient));
	
  }

}
