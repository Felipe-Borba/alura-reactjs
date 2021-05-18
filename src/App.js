import React, { Component } from 'react'
import Form from './components/Form'
import NoteList from './components/NoteList'
import CategoryList from './components/CategoryList'
import Category from './data/Category'
import NoteArray from './data/Notes'

import './assets/App.css'
import './assets/index.css'

export default class App extends Component {
  constructor() {
    super();
    this.category = new Category();
    this.notes = new NoteArray();
  }


  render() {
    return (
      <section className='content'>
        <Form
          category={this.category.category}
          createNote={this.notes.createNote}
        />
        <main className='main-content'>
          <CategoryList
            addCategory={this.category.addCategory}
            category={this.category.category}
          />
          <NoteList
            notes={this.notes.notes}
            deleteNote={this.notes.deleteNote}
          />
        </main>

      </section>
    );
  }
}
