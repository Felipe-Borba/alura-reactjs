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

    notify() {
        this._subscribers.forEach(func => func(this.category));
    }
}