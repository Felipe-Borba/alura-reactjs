import React, { Component } from 'react'
import Form from './components/Form/index'
import NoteList from './components/NoteList/index'
import './assets/App.css'
import './assets/index.css'

export default class App extends Component {
  constructor() {
    super()
    this.notes = []
  }

  createNote(title, text) {
    //console.debug('debug:',title,text)
    this.notes.push({title,text})
  }

  render() {
    return (
      <section className='content'>
        <Form createNote={this.createNote.bind(this)} />
        <NoteList notes={this.notes}/>
      </section>
    );
  }
}
