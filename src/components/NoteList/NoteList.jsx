import React, { Component } from 'react'
import CardNote from '../CardNote/CardNote'
import './NoteList.css'

export default class NoteList extends Component {
    render() {
        return (
            <ul className='note-list'>
                {Array.of('Job', 'study', 'etc').map((category, index) => {
                    return (
                        <li className='note-list_item' key={index} >
                            <CardNote />
                        </li>
                    );
                })}

            </ul>
        )
    }
}
