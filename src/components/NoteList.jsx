import React, { Component } from 'react'
import CardNote from './CardNote'


export default class NoteList extends Component {
    render() {
        return (
            <ul>
                <li>
                    <CardNote/>
                </li>
            </ul>
        )
    }
}
