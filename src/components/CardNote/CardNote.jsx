import React, { Component } from 'react'
import './CardNote.css'

export default class CardNote extends Component {
    render() {
        return (
            <section className='card-note'>
                <header>
                    <h3>Title</h3>
                </header>
                <p>Note</p>
            </section>
        )
    }
}
