import { ModelPlanet, ModelJedi } from './Star-Wars';
import Dataflow from './DataFlow';

const dataflow = new Dataflow();

class Planet extends ModelPlanet {
    reportToForce() {
        // Observable !😎
        dataflow.report('force', { force: true });
    }
}

class Jedi extends ModelJedi {
    constructor(name = 'midi-chlorien') {
        super(name);

        // Observateur ! 😲
        dataflow.suscribe(this, this.updateState);
    }
}

// Start
const alderaan = new Planet();
const yoda = new Jedi('yoda');
const obiWan = new Jedi('Obi Wan Kenobi');
const magic = new Jedi();
alderaan.explose();
