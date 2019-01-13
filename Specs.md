#PRIMOTO - Spécifications 🚗 💸 🎅🏻
##1.	Description de la Solution
###1.1	Caractéristiques de la Solution
Proposer une appli client/serveur qui permet aux utilisateurs de savoir à combien est estimée la reprise de leur véhicule et de les mettre en relation avec les concessionnaires automobiles autour d’eux. 

A l’inverse l’application peut être utilisée pour permettre aux concessionnaires d’améliorer leur prospection et de pouvoir avoir une publicité. 

###1.2	Historique de la solution 
Initialement l’application devait avoir un workflow simplifié en utilisant la plaque d’immatriculation du véhicule grâce à l’API de l’Argus. 

Problème : l’Argus n’as pas voulu nous donner accès à l’API.

###1.3	Acteurs du Projet :
*  👳🏽‍♂️ Omair ARSHAD - Developpeur back - [OmairAI](https://github.com/omairAI)
*	👱🏻‍♀️ Elisabeth MERIC - Developpeur front - Eliskimo
*	🧔🏼 Fabien HOS - Testeur - [Surybang](https://github.com/surybang)
*	🇨🇭 Tigran GRIGORIAN – Ux & UI Designer - [Mangoover](https://github.com/mangoover)
*	👨🏻‍💻 Yannis LE GUEN - Chef de projet - [YLGN](https://github.com/yannisleguen) 
 
###1.4	Hébergement 
*	🌍 IP public :[178.32.211.151](https://178.32.211.151)
*	🌍 Windows Serveur 2016 avec service IIS
*	🌍 Domaine : [omair.fr](https://omair.fr)
*	🌍 Nom dns : primoto.omair.fr [primoto.omair.fr](https://primoto.omair.fr)

###1.5	Applications utilisées 
*	Outil de gestion des dépendances
	*	NPM - [www.npmjs.com](https://www.npmjs.com/)
*	Outil d’éxécution des tests
	*	Karma -  [karma-runner.github.io](https://karma-runner.github.io/)
*	Outil d’intégration continue
	*	Jenkins : https://jenkins.io/ [jenkins.io](https://jenkins.io/)


###1.6	Langage de programmation, Librairies & Frameworks 
*	Java Script (.js)
*	Type Scrypt
*	Angular
*	Node JS
* HTML / CSS
	*	CSS grid



###1.7	Base de données :
*	vehicules.csv
*	concessionnaires.csv
*	regles_gestion.csv

###1.8	Documentation de référence

[www.primealaconversion.gouv.fr](https://www.primealaconversion.gouv.fr/dboneco/accueil/)

##2. Aspects métiers
###2.1	Criticité de l’Application
###2.2	Criticité / population des utilisateurs
Les utilisateurs ciblés sont Monsieur et Madame Tout-le-Monde, ils peuvent aussi bien être cadres supérieurs, sans-emploi, ou encore retraités.

L’application se doit alors d’être facilement utilisable et accessible. (Voir chartes graphique et ergonomique **Penser au lien en md**)

###2.3	Nombre d’utilisateurs

Non étudier. Le projet étant purement fictif, nous avons décidé de négliger cette étude et de ne pas intégrer un processus de montée en charges.


###2.4	SLA 
* Calculer la prime à la conversion de n’importe quel véhicule
* Proposer les concessionnaires présent dans la ville de Paris

##3.	Généralités fonctionnelles

###3.1	Versions et Fonctionnalités Principales Associées 


| Version  |Fonctionnalité |Contenu|
|:--------:|:-------------:|:-----|
| 1 |  FP1 | Tester l’éligibilité  |
| 2 |    FP2  |Calculer le montant de la prime|
| 3 | FP3 |Afficher la carte des concessionnaires|
| 4 | FP3 |   Filtrer par constructeur / villes|

###3.2	Cas d’utilisations
####3.3.1	Cas d’utilisation « Combien je peux gagner ? »
mettre le lien drive

##4.	Fonctionnalités détaillées

###4.1	Fonctionnalité “Eligibilité et Calculs de Primes”
####4.1.1	Description
Dialogue entre l’application et l’utilisateur via l’IHM afin de déterminer la prime à la conversion en cas d'éligibilité.
####4.1.2	Règles métier

Pour lire l'ensemble des règles métier : [Cliquez ici](https://drive.google.com/open?id=17Dm4rCb6B58sd4iGuFBwQGOL7qRHJdCbW7vsFqD8E18) 

###4.2	Fonctionnalité “Recherche d’un Concessionnaire”

####4.2.1	Description
Carte interactive affichant les différents concessionnaires à proximiter de l'utilisateur : *On se limitera à Paris pour le projet*
####4.2.2	Règles métier
Soon











