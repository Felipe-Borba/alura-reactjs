import React, { Component } from 'react'
import CardNote from '../CardNote'
import './NoteList.css'

export default class NoteList extends Component {
    render() {
        return (
            <ul className='note-list'>
                {this.props.notes.map((card, index) => {
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
