import React, { Component } from 'react'
import CardNote from '../CardNote'
import './NoteList.css'

export default class NoteList extends Component {
    constructor() {
        super();
        this.state = { notes: [] }
    }
    componentDidMount() {
        this.props.notes.subscribe(this._newNotes.bind(this));
    }

    _newNotes(notes) {
        this.setState({ ...this.state, notes });
    }

    render() {
        return (
            <ul className='note-list'>
                {this.state.notes.map((card, index) => {
                    return (
                        <li className='note-list_item' key={index} >
                            <CardNote
                                title={card.title}
                                text={card.text}
                                deleteNote={this.props.deleteNote}
                                index={index}
                                category={card.category}
                            />
                        </li>
                    );
                })}

            </ul>
        )
    }
}
