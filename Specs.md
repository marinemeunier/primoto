# PRIMOTO - Spécifications 🚗 💸 🎅🏻

## Description de la Solution

### Caractéristiques de la Solution

Proposer une appli client/serveur qui permet aux utilisateurs de savoir à combien est estimée la reprise de leur véhicule et de les mettre en relation avec les concessionnaires automobiles autour d’eux. 

A l’inverse l’application peut être utilisée pour permettre aux concessionnaires d’améliorer leur prospection et de pouvoir avoir une publicité. 

### Historique de la solution 

Initialement l’application devait avoir un workflow simplifié en utilisant la plaque d’immatriculation du véhicule grâce à l’API de l’Argus.

Problème : l’Argus n’as pas voulu nous donner accès à l’API.

### Acteurs du Projet

* 🇵🇰Omair ARSHAD - Developpeur back - [OmairAI](https://github.com/omairAI)
* 👱🏻‍♀️Elisabeth MERIC - Developpeur front - Eliskimo
* 🧔🏼Fabien HOS - Testeur - [Surybang](https://github.com/surybang)
* 🇷🇺Tigran GRIGORIAN – Ux & UI Designer - [Mangoover](https://github.com/mangoover)
* 👨🏻‍💻Yannis LE GUEN - Chef de projet - [YLGN](https://github.com/yannisleguen) 
 
### Hébergement

*	🌍 Windows Serveur 2016 avec service IIS
*	🌍 Domaine : [omair.fr](http://omair.fr)
*	🌍 Nom dns : primoto.omair.fr [primoto.omair.fr](http://primoto.omair.fr)

### Applications utilisées

*	Outil de gestion des dépendances
	*	NPM - [www.npmjs.com](https://www.npmjs.com/)
*	Outil d’intégration continue
	*	Jenkins - [www.jenkins.io](https://jenkins.io/)

### Langage de programmation, Librairies & Frameworks

*	JavaScript
*	TypeScript
*	Angular
*	Node JS
* HTML / CSS
  * Flex Box
* JSON

### Base de données

*	bdd_concessionnaires.json
*	regles_gestion.json

### Documentation de référence

[www.primealaconversion.gouv.fr](https://www.primealaconversion.gouv.fr/dboneco/accueil/)

## Aspects métiers

### Criticité de l’Application

### Criticité / population des utilisateurs

Les utilisateurs ciblés sont Monsieur et Madame Tout-le-Monde, ils peuvent aussi bien être cadres supérieurs, sans-emploi, ou encore retraités.

L’application se doit alors d’être facilement utilisable et accessible. (Voir chartes graphique et ergonomique en cliquant : [ici](https://github.com/yannisleguen/primoto/blob/master/charte_graphique.md))

### Nombre d’utilisateurs

Non étudier. Le projet étant purement fictif, nous avons décidé de négliger cette étude et de ne pas intégrer un processus de montée en charges.

### SLA

* Calculer la prime à la conversion de n’importe quel véhicule
* Proposer les concessionnaires présents dans la ville de Paris

## Généralités fonctionnelles

### Versions et Fonctionnalités Principales Associées 

| Version  |Fonctionnalité |Contenu|
|:--------:|:-------------:|:-----|
| 1 |  FP1 | Tester l’éligibilité  |
| 2 |    FP2  |Calculer le montant de la prime|
| 3 | FP3 |Afficher la carte des concessionnaires|
| 4 | FP3 |   Filtrer par constructeur / villes|

### Cas d’utilisations

#### Cas d’utilisation « Combien je peux gagner ? »

## Fonctionnalités détaillées

### Fonctionnalité “Eligibilité et Calculs de Primes”

#### Description
Dialogue entre l’application et l’utilisateur via l’IHM afin de déterminer la prime à la conversion en cas d'éligibilité.

#### Règles métier
Pour lire l'ensemble des règles métier : Cliquez [ici](https://github.com/yannisleguen/primoto/blob/master/regle_gestion.md) 

### Fonctionnalité “Recherche d’un Concessionnaire”

#### Description
Carte interactive affichant les différents concessionnaires à proximité de l'utilisateur : *On se limitera à Paris pour le projet* 

Possibilité de faire une recherche par adresse grace au moteur de recherche de l'API *Nomitatim*

#### Règles métier
Un concessionnaire est défini par :
* Un nom
* Une marque d'un constructeur (Imagée par un logo sur la carte)
* L'adresse du site web
* Son numéro de téléphone
* Son adresse

