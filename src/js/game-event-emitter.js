export default class GameEventEmitter {
    construtor() {
        this.subscribers = [];
        window.addEventListener('keyup', (e) => {
            console.log(e)
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