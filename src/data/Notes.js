export default class NoteArray {
    constructor() {
        this.notes = [];
        this._subscribers = [];
    }

    createNote(title, text, category) {
        const newNote = new note(title, text, category);
        this.notes.push(newNote);
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
    }

    subscribe(func) {
        this._subscribers.push(func);
    }

    notify() {
        this._subscribers.forEach(func => func(this.notes));
    }

}

class note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}