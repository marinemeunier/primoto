import { CalculPrime } from './calcul-prime.ts';
import { expect } from 'chai';
import 'mocha';

describe('CalculPrime | Diesel imposable voiture neuf', () => {

	var cp = new CalculPrime();
	
	it('achat véhciule electrique', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "electrique"]);
		expect(resultat["prime"]).to.equal(2500);
		expect(resultat["bonusEco"]).to.equal(6000);
	});
  
});
