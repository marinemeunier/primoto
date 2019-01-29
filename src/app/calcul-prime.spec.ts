import { CalculPrime } from './calcul-prime.ts';
import { expect } from 'chai';
import 'mocha';

describe('CalculPrime | Diesel imposable voiture neuf', () => {

	var cp = new CalculPrime();
/*
	it('achat véhicule electrique', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "electrique"]);
		expect(resultat["prime"]).to.equal(2500);
		expect(resultat["bonusEco"]).to.equal(6000);
	});

}); */

// Chemin arbre 1-3-4-5-8
describe('CalculPrime | Diesel non imposable voiture neuf', () => {

	var cp = new CalculPrime();

	it('achat véhicule electrique', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "electrique"]);
		expect(resultat["prime"]).to.equal(2500);
		expect(resultat["bonusEco"]).to.equal(6000);
	});

// Chemin arbre 2-18-19-20-22-23
	describe('CalculPrime | Diesel non imposable voiture neuf', () => {

		var cp = new CalculPrime();

		it('achat véhicule electrique grand rouleur', () => {
			cp.setIdActuel(2);
			var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "electrique","true",]);
			expect(resultat["prime"]).to.equal(5000);
			expect(resultat["bonusEco"]).to.equal(6000);
		});


});
// Chemin arbre 2-18-19-20-22-24
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule electrique non grand rouleur', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "electrique","false"]);
		expect(resultat["prime"]).to.equal(2500);
		expect(resultat["bonusEco"]).to.equal(6000);
	});

});

// Chemin arbre 2-18-19-20-25-26-27-28
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA1 grand rouleur', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca1","-50","true"]);
		expect(resultat["prime"]).to.equal(5000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});

// Chemin arbre 2-18-19-20-25-26-27-29
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA1 non grand rouleur', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca1","-50","true","false"]);
		expect(resultat["prime"]).to.equal(2500);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});

// Chemin arbre 2-18-19-20-25-26-30-31
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA1', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca1","-50","false","true","true"]);
		expect(resultat["prime"]).to.equal(4000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
// Chemin arbre 2-18-19-20-25-26-30-32
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA1', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca1","-50","false","true","false"]);
		expect(resultat["prime"]).to.equal(4000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});

// Chemin arbre 2-18-19-20-25-30-32
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA1', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca1","50-122","false"]);
		expect(resultat["prime"]).to.equal(2000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
// Chemin arbre 2-18-19-20-25-30-31
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuf CA1 taux emission 50-122 grand rouleur', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca1","50-122","true"]);
		expect(resultat["prime"]).to.equal(4000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
// Chemin arbre 2-18-19-20-25-999
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA1 +122 emission', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca1","+122"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});

// Chemin arbre 2-18-19-20-33-999
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA2+122 emission', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca2","+122"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
// Chemin arbre 2-18-19-20-33-30-31
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA2 - 122 emission grand rouleur', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca2","-122","true"]);
		expect(resultat["prime"]).to.equal(4000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
// Chemin arbre 2-18-19-20-33-30-32
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuve CA2 -122 non grand rouleur', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "ca2","-122","false"]);
		expect(resultat["prime"]).to.equal(2000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});

// Chemin arbre 2-18-19-20-999
describe('CalculPrime | Diesel non imposable voiture neuf ', () => {

	var cp = new CalculPrime();

	it('achat véhicule neuf CA2 autres cat', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "voiture", "neuf", "autres"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});


// Chemin arbre 2-18-15-16-17
describe('CalculPrime | Diesel non imposable moto neuf', () => {

	var cp = new CalculPrime();

	it('achat moto neuve electrique', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "moto", "neuf", "electrique"]);
		expect(resultat["prime"]).to.equal(1100);
		expect(resultat["bonusEco"]).to.equal(900);
	});

});
// Chemin arbre 2-18-15-16-999
describe('CalculPrime | Diesel non imposable moto neuf', () => {

	var cp = new CalculPrime();

	it('achat moto neuve ca1', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "moto", "neuf", "ca1"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});
});
// Chemin arbre 2-18-15-16-999
describe('CalculPrime | Diesel non imposable moto neuf', () => {

	var cp = new CalculPrime();

	it('achat moto neuve ca2', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "moto", "neuf", "ca2"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});
});

// Chemin arbre 2-18-15-16-999
describe('CalculPrime | Diesel non imposable moto neuf', () => {

	var cp = new CalculPrime();

	it('achat moto neuve autres', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "moto", "neuf", "autres"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});
});

// Chemin arbre 2-18-15-999
describe('CalculPrime | Diesel non imposable moto occasion', () => {

	var cp = new CalculPrime();

	it('achat moto occasion', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["true", "moto", "occasion"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});
});
// CHEMIN ARBRE 1-999
describe('CalculPrime | Diesel imposable avant 2001', () => {

	var cp = new CalculPrime();

	it('non eligible', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["false"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
// CHEMIN ARBRE 2-999
describe('CalculPrime | Diesel non imposable après 2006', () => {

	var cp = new CalculPrime();

	it('non éligible', () => {
		cp.setIdActuel(2);
		var resultat = cp.testCalculPrime(["false"]);
		expect(resultat["prime"]).to.equal(0);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});

//chemin arbre 1-3-4-10-9
describe('CalculPrime | Diesel imposable avant 2001 occas', () => {

	var cp = new CalculPrime();

	it('achat véhicule occas elec ', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["true","voiture","occasion","electrique"]);
		expect(resultat["prime"]).to.equal(1000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
//chemin arbre 1-3-4-10-9
describe('CalculPrime | Diesel imposable avant 2001 occas', () => {

	var cp = new CalculPrime();

	it('achat véhicule occas ca1', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["true","voiture","occasion","ca1"]);
		expect(resultat["prime"]).to.equal(1000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
//CHEMIN ARBRE 1-3-4-10-999
describe('CalculPrime | Diesel imposable avant 2001 occas', () => {

	var cp = new CalculPrime();

	it('achat véhicule occas ca2', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["true","voiture","occasion","ca2"]);
		expect(resultat["prime"]).to.equal(1000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});
//CHEMIN ARBRE 1-3-4-10-999
describe('CalculPrime | Diesel imposable avant 2001 occas', () => {

	var cp = new CalculPrime();

	it('achat véhicule occas autres', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["true","voiture","occasion","autres"]);
		expect(resultat["prime"]).to.equal(1000);
		expect(resultat["bonusEco"]).to.equal(0);
	});

});


//Chemin arbre 37-38-51-58-22-23
describe('CalculPrime | Essence non imposable avant 1997 ', () => {

	var cp = new CalculPrime();

	it('achat voiture neuve electrique grand rouleur', () => {
		cp.setIdActuel(1);
		var resultat = cp.testCalculPrime(["true","voiture","neuf","electrique","true"]);
		expect(resultat["prime"]).to.equal(5000);
		expect(resultat["bonusEco"]).to.equal(6000);
	});

});
