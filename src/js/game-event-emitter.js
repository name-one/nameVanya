export default class GameEventEmitter {
    constructor() {
        this.subscribers = [];
        window.addEventListener('keyup', (e) => {
            this.emitEvent(e.keyCode);
        })
    }

    subscribeOnEvents(subscriber) {
        this.subscribers.push(subscriber);
    }

    emitEvent(eventType) {
        this.subscribers.forEach(subscriber => {
            subscriber(eventType)
        })
    }
}

// event types
export const RIGHT = 39;
export const TOP = 38;
export const LEFT = 37;
export const BOTTOM = 40;