import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculPrime } from '../calcul-prime';

@Component({
  selector: 'app-calcul-prime-component',
  templateUrl: './calcul-prime-component.component.html',
  styleUrls: ['./calcul-prime-component.component.css']
})
export class CalculPrimeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  estMajeur = null;
  estImposable = null;
  typeVehicule = null;
  premierId = null;
  maxEtapes = null;
  cp = new CalculPrime();

  initial(form: NgForm) {
    document.getElementById("initialForm").style.display = "none";
    document.getElementById("majeurFranceForm").style.display = "initial";
	document.getElementById("initialBar").style.display = "flex";
	document.getElementById("initialBarNb1").style.backgroundColor = "#4CAF50";
	document.getElementById("initialBarNb1").style.color = "#4CAF50";
  }

  majeurFrance(form: NgForm) {
    this.estMajeur = JSON.parse(form.value['majeurFrance']);
      
    if(this.estMajeur) {
      document.getElementById("majeurFranceForm").style.display = "none";
      document.getElementById("imposableForm").style.display = "initial";
	  document.getElementById("initialBarNb2").style.backgroundColor = "#4CAF50";
	  document.getElementById("initialBarNb2").style.color = "#4CAF50";
    }
    else {
	  document.getElementById("majeurFranceForm").style.display = "none";
	  document.getElementById("resultat").style.display = "initial";
	  document.getElementById("resultatPhrase").innerHTML = "Vous n'êtes pas éligible à la prime à la conversion.";
    }
  }

  imposable(form: NgForm) {
    this.estImposable = JSON.parse(form.value['imposable']);
    document.getElementById("imposableForm").style.display = "none";
    document.getElementById("typeVoitureForm").style.display = "initial";
	document.getElementById("initialBarNb3").style.backgroundColor = "#4CAF50";
	document.getElementById("initialBarNb3").style.color = "#4CAF50";
  }

  typeVoiture(form: NgForm) {
    this.typeVehicule = form.value['typeVoiture'];
    
	document.getElementById("typeVoitureForm").style.display = "none";
	
    if(this.estImposable) {
	  if (this.typeVehicule == "diesel") {
		this.cp.setIdActuel(1);
	  }
	  else {
		this.cp.setIdActuel(39);
	  }
    }
	else {
	  if (this.typeVehicule == "diesel") {
		this.cp.setIdActuel(2);
	  }
	  else {
		this.cp.setIdActuel(37);
	  }
	}
	
	this.cp.lancementCalculPrime();
	document.getElementById("initialBar").style.display = "none";
	document.getElementById("bar").style.display = "block";
  }
  
  traitement(form: NgForm) {
	var reponse = form.value['reponse'] + "Fils";
	this.cp.etapeCalculPrime(reponse);
	
  }
  
  reinitialiser(form: NgForm) {
	this.cp = new CalculPrime();
	this.cp.setProgressionBar(0);
	document.getElementById("resultat").style.display = "none";
	document.getElementById("majeurFranceForm").style.display = "initial";
	document.getElementById("bar").style.display = "none";
	document.getElementById("initialBar").style.display = "flex";
	document.getElementById("initialBarNb2").style.backgroundColor = "#f1f1f1";
	document.getElementById("initialBarNb2").style.color = "#f1f1f1";
	document.getElementById("initialBarNb3").style.backgroundColor = "#f1f1f1";
	document.getElementById("initialBarNb3").style.color = "#f1f1f1";
  }
  
  afficherCarte(form: NgForm) {
	document.getElementById('myModal').style.display = "block";
	window.dispatchEvent(new Event('resize'));
  }

}
