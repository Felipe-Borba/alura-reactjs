export default class Category {
    constructor() {
        this.category = [];
        this._subscribers = [];
    }

    addCategory(name) {
        this.category.push(name);
        this.notify();
    }

    subscribe(func) {
        this._subscribers.push(func);
    }

    unsubscribe(func) {
        this._subscribers = this._subscribers.filter(f => f !== func);
    }

    notify() {
        this._subscribers.forEach(func => func(this.category));
    }
}