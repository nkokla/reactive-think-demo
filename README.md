# reactive-think-demo

Ceci est une demo de code accompagnant le _Talk_ en français ["Reactive Thinking" [slides.com/nicolaskokla/reactive-think]](slides.com/nicolaskokla/reactive-think)

Vous y trouverez les implémentations d'un même scénario de code (commenté en français) sous deux approches différentes :
* Event Driven Programming
* Reactive Programming.

## Scénario 

À l'appel d'une methode `explose()` sur un Object/Composant `Planet()`, tous les Objects/Composants `Jedi()` réagissent.

## Installation

* Cloner le _repo_ puis se rendre à la racine du  répertoire : 
```
$ git clone https://github.com/nkokla/reactive-think-demo.git && cd reactive-think-demo
```

* Intaller les dépendances :
```
npm install
```

## Exécution 

__Exécuter la version 'event-driven-programming' :__
```
npm run start:event -s
```

__Exécuter la version reactive-programming :__
```
npm run start:reactive -s
```

## Description des fichiers

* `src/DataFlow.js` : Implémentation du dataflow
* `src/StarWars.js` : Objet emitter/listener (event-driven) ou observable/observer (reactive)
* `src/event-driven.js` : Implementation du scénario via 'event-driven-programming'
* `src/reactive.js` : Implementation du scénario via 'reactive-programming'