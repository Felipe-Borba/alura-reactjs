export default class NoteArray {
    constructor() {
        this.notes = [];
    }

    createNote(title, text, category) {
        const newNote = new note(title, text, category);
        this.notes.push(newNote);
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
    }

}

class note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}