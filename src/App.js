import React, { Component } from 'react'
import Form from './components/Form/index'
import NoteList from './components/NoteList/index'
import './assets/App.css'
import './assets/index.css'

export default class App extends Component {
  createNote(title, text) {
    console.log('debug:',title,text)
  }

  render() {
    return (
      <section className='content'>
        <Form createNote={this.createNote} />
        <NoteList />
      </section>
    );
  }
}
