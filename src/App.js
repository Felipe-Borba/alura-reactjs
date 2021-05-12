import React, { Component } from 'react'
import Form from './components/Form/index'
import NoteList from './components/NoteList/index'
import './assets/App.css'
import './assets/index.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: []
    }
  }

  createNote(title, text) {
    const newNote = { title, text }
    const newNoteArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNoteArray
    }
    this.setState(newState)
  }

  deleteNote(index) {
    let noteArray = this.state.notes;
    noteArray.splice(index,1);
    this.setState({notes: noteArray});
  }

  render() {
    return (
      <section className='content'>
        <Form createNote={this.createNote.bind(this)} />
        <NoteList
          notes={this.state.notes}
          deleteNote={this.deleteNote.bind(this)}
        />
      </section>
    );
  }
}
