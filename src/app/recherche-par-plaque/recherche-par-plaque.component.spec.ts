
import * as fonc from "../fonction.ts";
import { expect } from 'chai';
import 'mocha';

describe('type et etat vehicule voulu : essence neuf', () => {
	
	it('imposable | non grand rouleur => résultat attendu : 1000€', () => {
		expect(fonc.getMontantPrime(true, "essence", "neuf", false)).to.equal(1000);
	});
    
	it('imposable | grand rouleur => résultat attendu : 2000€', () => {
		expect(fonc.getMontantPrime(true, "essence", "neuf", true)).to.equal(2000);
	});
	
	it('non imposable | non grand rouleur => résultat attendu : 2000€', () => {
		expect(fonc.getMontantPrime(false, "essence", "neuf", false)).to.equal(2000);
	});
	
	it('non imposable | grand rouleur => résultat attendu : 4000€', () => {
		expect(fonc.getMontantPrime(false, "essence", "neuf", true)).to.equal(4000);
	});
	
});

describe('type et etat vehicule voulu : essence occasion', () => {
	
	it('imposable | non grand rouleur => résultat attendu : 1000€', () => {
		expect(fonc.getMontantPrime(true, "essence", "occasion", false)).to.equal(1000);
	});
    
	it('imposable | grand rouleur => résultat attendu : 2000€', () => {
		expect(fonc.getMontantPrime(true, "essence", "occasion", true)).to.equal(2000);
	});
	
	it('non imposable | non grand rouleur => résultat attendu : 2000€', () => {
		expect(fonc.getMontantPrime(false, "essence", "occasion", false)).to.equal(2000);
	});
	
	it('non imposable | grand rouleur => résultat attendu : 4000€', () => {
		expect(fonc.getMontantPrime(false, "essence", "occasion", true)).to.equal(4000);
	});
	
});

describe('type et etat vehicule voulu : diesel neuf', () => {
	
	it('imposable | non grand rouleur => résultat attendu : 0€', () => {
		expect(fonc.getMontantPrime(true, "diesel", "neuf", false)).to.equal(0);
	});
    
	it('imposable | grand rouleur => résultat attendu : 0€', () => {
		expect(fonc.getMontantPrime(true, "diesel", "neuf", true)).to.equal(0);
	});
	
	it('non imposable | non grand rouleur => résultat attendu : 2000€', () => {
		expect(fonc.getMontantPrime(false, "diesel", "neuf", false)).to.equal(2000);
	});
	
	it('non imposable | grand rouleur => résultat attendu : 4000€', () => {
		expect(fonc.getMontantPrime(false, "diesel", "neuf", true)).to.equal(4000);
	});
	
});

describe('type et etat vehicule voulu : diesel occasion', () => {
	
	it('imposable | non grand rouleur => résultat attendu : 0€', () => {
		expect(fonc.getMontantPrime(true, "diesel", "occasion", false)).to.equal(0);
	});
    
	it('imposable | grand rouleur => résultat attendu : 0€', () => {
		expect(fonc.getMontantPrime(true, "diesel", "occasion", true)).to.equal(0);
	});
	
	it('non imposable | non grand rouleur => résultat attendu : 2000€', () => {
		expect(fonc.getMontantPrime(false, "diesel", "occasion", false)).to.equal(2000);
	});
	
	it('non imposable | grand rouleur => résultat attendu : 4000€', () => {
		expect(fonc.getMontantPrime(false, "diesel", "occasion", true)).to.equal(4000);
	});
	
});

describe('type et etat vehicule voulu : electrique / hybride neuf', () => {
	
	it('imposable | non grand rouleur => résultat attendu : 2500€', () => {
		expect(fonc.getMontantPrime(true, "electrique / hybride", "neuf", false)).to.equal(2500);
	});
    
	it('imposable | grand rouleur => résultat attendu : 5000€', () => {
		expect(fonc.getMontantPrime(true, "electrique / hybride", "neuf", true)).to.equal(5000);
	});
	
	it('non imposable | non grand rouleur => résultat attendu : 2500€', () => {
		expect(fonc.getMontantPrime(false, "electrique / hybride", "neuf", false)).to.equal(2500);
	});
	
	it('non imposable | grand rouleur => résultat attendu : 5000', () => {
		expect(fonc.getMontantPrime(false, "electrique / hybride", "neuf", true)).to.equal(5000);
	});
	
});

describe('type et etat vehicule voulu : electrique / hybride occasion', () => {
	
	it('imposable | non grand rouleur => résultat attendu : 1000€', () => {
		expect(fonc.getMontantPrime(true, "electrique / hybride", "occasion", false)).to.equal(1000);
	});
    
	it('imposable | grand rouleur => résultat attendu : 2000€', () => {
		expect(fonc.getMontantPrime(true, "electrique / hybride", "occasion", true)).to.equal(2000);
	});
	
	it('non imposable | non grand rouleur => résultat attendu : 2500', () => {
		expect(fonc.getMontantPrime(false, "electrique / hybride", "occasion", false)).to.equal(2500);
	});
	
	it('non imposable | grand rouleur => résultat attendu : 5000€', () => {
		expect(fonc.getMontantPrime(false, "electrique / hybride", "occasion", true)).to.equal(5000);
	});
	
});
	  
	/*it('doit retourner les bons montantes de primes pour les imposables non grands rouleurs', () => {
		expect(fonc.getMontantPrime(true, "essence", "neuf", false)).to.equal(1000);
		expect(fonc.getMontantPrime(true, "essence", "occasion", false)).to.equal(1000);
		expect(fonc.getMontantPrime(true, "diesel", "neuf", false)).to.equal(0);
		expect(fonc.getMontantPrime(true, "diesel", "occasion", false)).to.equal(0);
		expect(fonc.getMontantPrime(true, "electrique / hybride", "neuf", false)).to.equal(2500);
		expect(fonc.getMontantPrime(true, "electrique / hybride", "occasion", false)).to.equal(1000);
	});
	  
	it('doit retourner les bons montantes de primes pour les imposables grands rouleurs', () => {
		expect(fonc.getMontantPrime(true, "essence", "neuf", true)).to.equal(2000);
		expect(fonc.getMontantPrime(true, "essence", "occasion", true)).to.equal(2000);
		expect(fonc.getMontantPrime(true, "diesel", "neuf", true)).to.equal(0);
		expect(fonc.getMontantPrime(true, "diesel", "occasion", true)).to.equal(0);
		expect(fonc.getMontantPrime(true, "electrique / hybride", "neuf", true)).to.equal(5000);
		expect(fonc.getMontantPrime(true, "electrique / hybride", "occasion", true)).to.equal(2000);
	});
	  
	it('doit retourner les bons montantes de primes pour les non imposables non grands rouleurs', () => {
		expect(fonc.getMontantPrime(false, "essence", "neuf", false)).to.equal(2000);
		expect(fonc.getMontantPrime(false, "essence", "occasion", false)).to.equal(2000);
		expect(fonc.getMontantPrime(false, "diesel", "neuf", false)).to.equal(2000);
		expect(fonc.getMontantPrime(false, "diesel", "occasion", false)).to.equal(2000);
		expect(fonc.getMontantPrime(false, "electrique / hybride", "neuf", false)).to.equal(2500);
		expect(fonc.getMontantPrime(false, "electrique / hybride", "occasion", false)).to.equal(2500);
	});
	  
	it('doit retourner les bons montantes de primes pour les non imposables grands rouleurs', () => {
		expect(fonc.getMontantPrime(false, "essence", "neuf", true)).to.equal(4000);
		expect(fonc.getMontantPrime(false, "essence", "occasion", true)).to.equal(4000);
		expect(fonc.getMontantPrime(false, "diesel", "neuf", true)).to.equal(4000);
		expect(fonc.getMontantPrime(false, "diesel", "occasion", true)).to.equal(4000);
		expect(fonc.getMontantPrime(false, "electrique / hybride", "neuf", true)).to.equal(5000);
		expect(fonc.getMontantPrime(false, "electrique / hybride", "occasion", true)).to.equal(5000);
	});*/