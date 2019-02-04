import * as json from './arbre.json';

export class CalculPrime {
  
  private idActuel: number;
  private idPrecedent;
  private jsonParse;
  private maxEtapes;
  private possibiliteMax;
  private nbPossibiliteMax;

  constructor() {
    this.idActuel = null;
	this.idPrecedent = [];
	this.jsonParse = json;
	this.possibiliteMax = 0;
	this.nbPossibiliteMax = 0;
  }

  public getIdActuel() {
    return this.idActuel;
  }

  public setIdActuel(idActuel: number) {
    this.idActuel = idActuel;
  }

  public lancementCalculPrime() {
    document.getElementById(this.jsonParse[this.idActuel]["htmlID"]).style.display = "initial";
	this.setNbPossibiliteMax(this.idActuel);
  }
  
  public etapeCalculPrime(cleFils: string) {
	if (this.jsonParse[this.idActuel]["nbFils"] != 0) {
      document.getElementById(this.jsonParse[this.idActuel]["htmlID"]).style.display = "none";
	  this.idPrecedent.push(this.idActuel);
	  this.idActuel = this.jsonParse[this.idActuel][cleFils];
	  this.incrementerBar();
	  document.getElementById(this.jsonParse[this.idActuel]["htmlID"]).style.display = "initial";
    }
	if (this.jsonParse[this.idActuel]["nbFils"] == 0) {
      var c = document.getElementById("conteneurForm").children as HTMLCollectionOf<HTMLElement>;
      for(var i = 0; i < c.length; i++) {
        c[i].style.display = "none";
      }
      document.getElementById("resultat").style.display = "initial";
	  document.getElementById(this.jsonParse[this.idActuel]["htmlID"]).innerHTML = "Prime de " + this.jsonParse[this.idActuel]["prime"] + "€.<br>"
																					+ "Bonus eco de " + this.jsonParse[this.idActuel]["bonusEco"] + "€.";
    }
  }
  
  public etapePrecedente() {
	   document.getElementById(this.jsonParse[this.idActuel]["htmlID"]).style.display = "none";
	   this.idActuel = this.idPrecedent[this.idPrecedent.length-1];
	   document.getElementById(this.jsonParse[this.idActuel]["htmlID"]).style.display = "initial";
	   this.idPrecedent.pop();
  }
  
  public testCalculPrime(etapeTab) {
	for(var i = 0; i < etapeTab.length; i++) {
	  if (this.jsonParse[this.idActuel]["nbFils"] != 0) {
		this.idActuel = this.jsonParse[this.idActuel][etapeTab[i] + "Fils"];
	  }
	  if (this.jsonParse[this.idActuel]["nbFils"] == 0) {
		return {"prime": this.jsonParse[this.idActuel]["prime"], "bonusEco": this.jsonParse[this.idActuel]["bonusEco"]};
	  }
    }
  }
  
  private getEtapesRestantes(idSuivant: number) {
	
	this.possibiliteMax += 1;
	
	if (this.jsonParse[idSuivant]["nbFils"] != 0) {
		for (var key in json[idSuivant]) {
			if (key.includes("Fils") && key != "nbFils") {
				this.getEtapesRestantes(this.jsonParse[idSuivant][key]);
			}
		}
	}
  }
  
  public getMaxEtapes(idSuivant: number) {
	  this.possibiliteMax = 0;
	  this.getEtapesRestantes(idSuivant);
  }
  
  public setNbPossibiliteMax(idSuivant: number) {
	  this.possibiliteMax = 0;
	  this.getEtapesRestantes(idSuivant);
	  this.nbPossibiliteMax = this.possibiliteMax;
  }
  
  public incrementerBar() {
	this.getMaxEtapes(this.idActuel);
	if (this.possibiliteMax == 1) {
		var widthCSS = 100;
	}
	else {
		var widthCSS = (this.nbPossibiliteMax - this.possibiliteMax) / this.nbPossibiliteMax * 100;
	}
	this.setProgressionBar(widthCSS);
  }
  
  public setProgressionBar(widthCSS: number) {
	document.getElementById("bar").style.width = widthCSS + "%";
	console.log(widthCSS);
	document.getElementById("bar").innerHTML = Math.round(widthCSS) + "%";
  }

}