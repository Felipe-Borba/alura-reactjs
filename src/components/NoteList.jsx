import React, { Component } from 'react'


export default class NoteList extends Component {
    render() {
        return (
            <ul>
                <li>
                    <header>
                        <h3>Title</h3>
                    </header>
                    <p>Note</p>
                </li>
            </ul>
        )
    }
}
