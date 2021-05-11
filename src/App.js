import React, { Component } from "react";
import Form from "./components/Form/Form";
import NoteList from "./components/NoteList/NoteList";


export default class App extends Component {
  render() {
    return (
      <section>
        <Form />
        <NoteList />
      </section>
    );
  }
}
