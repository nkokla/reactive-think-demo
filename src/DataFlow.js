import EventEmitter from 'events';

class Dataflow {
    suscriber = [];
    emitter = new EventEmitter();
    
    suscribe(item, callBack) {
        this.suscriber.push(item);
        return this.emitter.on(
            'new-data', 
            ({ type, newState }) => callBack.call(item, newState)
        );
    }

    report(type, newState = true) {
        this.emitter.emit('new-data', { type, newState });
    }
}

export default Dataflow;