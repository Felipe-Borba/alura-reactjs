import React, { Component } from 'react'
import Form from './components/Form/index'
import NoteList from './components/NoteList/index'
import './assets/App.css'
import './assets/index.css'

export default class App extends Component {
  render() {
    return (
      <section className='content'>
        <Form />
        <NoteList />
      </section>
    );
  }
}
