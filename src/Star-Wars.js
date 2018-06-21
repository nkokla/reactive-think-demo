
import EventEmitter from 'events';
import chalk from 'chalk';

class ModelPlanet {
    emitter = new EventEmitter();

    on(event) {
        this[event]();
    }

    explose(params) {
        console.log('💥 ', chalk.red('Planet has explosed'));
        this.reportToForce(params);
    }

    reportToForce(params) {
        // Comment faire ?
        // Event-driven ?
        // Reactive ?
    }
}

class ModelJedi {
    emitter = new EventEmitter();

    state = {
        force: false,
    };

    constructor(name = 'midi-chlorien') {
        this.name = name;
        this.emitter.on(
            'stateChange',
            (newState) => this.onStateChange(newState)
        );
    }

    updateState(newState) {
        this.state = {
            ...this.state,
            ...newState,
        };
        this.emitter.emit('stateChange', this.state)
    }

    handleDetectTrouble() {
        console.log('💬 ', chalk.yellow(this.name, 'say :'), 'Hey il y a un trouble non ?');
    }

    onStateChange(newState) {
        if (newState.force) {
            this.handleDetectTrouble();
        }
    }
}

export {
    ModelPlanet,
    ModelJedi,
}
