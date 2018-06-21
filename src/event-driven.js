
import "babel-polyfill";
import { ModelPlanet, ModelJedi } from './Star-Wars';

// Event :
// const Planet = new EventEmitter();
// Planet.on('explose', () => console.log('Hey il y a un trouble non ?'))
// Planet.emit('explose');

class Planet extends ModelPlanet {
    reportToForce(listOfReceivers = []) {
        listOfReceivers.forEach(
            // Liaison forte !!! 🤮
            (receiver) => receiver.updateState({ force: true })
        )
    }
}

class Jedi extends ModelJedi {
    constructor(name = 'midi-chlorien') {
        super(name);
        // Rien a ajouter... 🤘
        // C'est pour ça que ça semble plus facile 
    }
}


// Start
const alderaan = new Planet();
const yoda = new Jedi('yoda');
const obiWan = new Jedi('Obi Wan Kenobi');
const magic = new Jedi();
alderaan.explose([yoda, obiWan, magic]);
