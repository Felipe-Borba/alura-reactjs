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
          category={this.category}
          createNote={this.notes.createNote.bind(this.notes)}
        />
        <main className='main-content'>
          <CategoryList
            addCategory={this.category.addCategory.bind(this.category)}
            category={this.category}
          />
          <NoteList
            notes={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>

      </section>
    );
  }
}
