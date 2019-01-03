import * as c from "./constantes";

const LIST_MONTANT_IMPOSABLE = [c.MONTANT_PRIME_IMPOSABLE_ESSENCE_NEUF,
								c.MONTANT_PRIME_IMPOSABLE_ESSENCE_OCCASION,
								c.MONTANT_PRIME_IMPOSABLE_DIESEL_NEUF,
								c.MONTANT_PRIME_IMPOSABLE_DIESEL_OCCASION,
								c.MONTANT_PRIME_IMPOSABLE_ELECTRIQUE_HYBRIDE_NEUF,
								c.MONTANT_PRIME_IMPOSABLE_ELECTRIQUE_HYBRIDE_OCCASION,
								c.MONTANT_PRIME_IMPOSABLE_MOTO_ELECTRIQUE];

const LIST_MONTANT_NON_IMPOSABLE = [c.MONTANT_PRIME_NON_IMPOSABLE_ESSENCE_NEUF,
									c.MONTANT_PRIME_NON_IMPOSABLE_ESSENCE_OCCASION,
									c.MONTANT_PRIME_NON_IMPOSABLE_DIESEL_NEUF,
									c.MONTANT_PRIME_NON_IMPOSABLE_DIESEL_OCCASION,
									c.MONTANT_PRIME_NON_IMPOSABLE_ELECTRIQUE_HYBRIDE_NEUF,
									c.MONTANT_PRIME_NON_IMPOSABLE_ELECTRIQUE_HYBRIDE_OCCASION,
									c.MONTANT_PRIME_NON_IMPOSABLE_MOTO_ELECTRIQUE];

export function getPrime(carData) {
	
	var type = carData[c.INDEX_TYPE].toLowerCase();
	var datePremiereImmatriculation = new Date(carData[c.INDEX_DATE_PREMIERE_IMMATRICULATION]);
	var estImposable = carData[c.INDEX_IMPOSABLE];
	var typeVehiculeVoulu = carData[c.INDEX_TYPE_VEHICULE_VOULU];
	var etatVehiculeVoulu = carData[c.INDEX_ETAT_VEHICULE_VOULU];
	
	if (type == "essence") {
		if (datePremiereImmatriculation < c.DATE_LIMITE_ESSENCE) {
			if (estImposable) {
				return [getMontantPrime(estImposable, typeVehiculeVoulu, etatVehiculeVoulu), LIST_MONTANT_IMPOSABLE];
			}
			else {
				return [getMontantPrime(estImposable, typeVehiculeVoulu, etatVehiculeVoulu), LIST_MONTANT_NON_IMPOSABLE];
			}
		}
		else return 0;
	}
	else if (type == "diesel") {
		if (estImposable) {
			if (datePremiereImmatriculation < c.DATE_LIMITE_DIESEL_IMPOSABLE) {
				return [getMontantPrime(estImposable, typeVehiculeVoulu, etatVehiculeVoulu), LIST_MONTANT_IMPOSABLE];
			}
			else return 0;
		}
		else {
			if (datePremiereImmatriculation < c.DATE_LIMITE_DIESEL_NON_IMPOSABLE) {
				return [getMontantPrime(estImposable, typeVehiculeVoulu, etatVehiculeVoulu), LIST_MONTANT_NON_IMPOSABLE];
			}
			else return 0;
		}
	}
	else {
		return [-999, -999];
	}
	
}

export function getMontantPrime(estImposable, typeVehiculeVoulu, etatVehiculeVoulu) {

	if (estImposable) {
		switch (typeVehiculeVoulu) {
			case "essence":
				if (etatVehiculeVoulu == "neuf") {
					return c.MONTANT_PRIME_IMPOSABLE_ESSENCE_NEUF;
					break;
				}
				else {
					return c.MONTANT_PRIME_IMPOSABLE_ESSENCE_OCCASION;
					break;
				}
			case "diesel":
				if (etatVehiculeVoulu == "neuf") {
					return c.MONTANT_PRIME_IMPOSABLE_DIESEL_NEUF;
					break;
				}
				else {
					return c.MONTANT_PRIME_IMPOSABLE_DIESEL_OCCASION;
					break;
				}
			case "electrique / hybride":
				if (etatVehiculeVoulu == "neuf") {
					return c.MONTANT_PRIME_IMPOSABLE_ELECTRIQUE_HYBRIDE_NEUF;
					break;
				}
				else {
					return c.MONTANT_PRIME_IMPOSABLE_ELECTRIQUE_HYBRIDE_OCCASION;
					break;
				}
		}
	}
	else {
		switch (typeVehiculeVoulu) {
			case "essence":
				if (etatVehiculeVoulu == "neuf") {
					return c.MONTANT_PRIME_NON_IMPOSABLE_ESSENCE_NEUF;
					break;
				}
				else {
					return c.MONTANT_PRIME_NON_IMPOSABLE_ESSENCE_OCCASION;
					break;
				}
			case "diesel":
				if (etatVehiculeVoulu == "neuf") {
					return c.MONTANT_PRIME_NON_IMPOSABLE_DIESEL_NEUF;
					break;
				}
				else {
					return c.MONTANT_PRIME_NON_IMPOSABLE_DIESEL_OCCASION;
					break;
				}
			case "electrique / hybride":
				if (etatVehiculeVoulu == "neuf") {
					return c.MONTANT_PRIME_NON_IMPOSABLE_ELECTRIQUE_HYBRIDE_NEUF;
					break;
				}
				else {
					return c.MONTANT_PRIME_NON_IMPOSABLE_ELECTRIQUE_HYBRIDE_OCCASION;
					break;
				}
		}
	}
	
}

function creationReturnList() {
	
}