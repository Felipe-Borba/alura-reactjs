import React, { Component } from 'react'
import './CardNote.css'
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg'

export default class CardNote extends Component {

    erase() {
        this.props.deleteNote(this.props.index);
    }

    render() {
        return (
            <section className='card-note'>
                <header className='card-note_header'>
                    <h3 className='card-note_title'>{this.props.title}</h3>
                    <DeleteSVG onClick={this.erase.bind(this)} />
                    <h4>{this.props.category}</h4>
                </header>
                <p className='card-note_text'>{this.props.text}</p>
            </section>
        )
    }
}
