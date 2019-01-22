import * as json from './arbre.json';

export class CalculPrime {
  
  private idActuel: number;
  private idPrecedent: number;
  private jsonParse;

  constructor() {
    this.idActuel = null;
	this.idPrecedent = null;
	this.jsonParse = json;
  }

  public getIdActuel() {
    return this.idActuel;
  }

  public setIdActuel(idActuel: number) {
    this.idActuel = idActuel;
  }

  public lancementCalculPrime() {
    document.getElementById(this.jsonParse[this.idActuel]["htmlID"]).style.display = "initial";
  }
  
  public etapeCalculPrime(cleFils: string) {
	if (this.jsonParse[this.idActuel]["nbFils"] != 0) {
      document.getElementById(this.jsonParse[this.idActuel]["htmlID"]).style.display = "none";
	  this.idActuel = this.jsonParse[this.idActuel][cleFils];
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

}