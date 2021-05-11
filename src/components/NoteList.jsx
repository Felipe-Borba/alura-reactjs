import React, { Component } from 'react'
import CardNote from './CardNote'


export default class NoteList extends Component {
    render() {
        return (
            <ul>
                {Array.of('Job', 'study', 'etc').map(category => {
                    return (
                        <li>
                            <div>{category}</div>
                            <CardNote />
                        </li>
                    );
                })}

            </ul>
        )
    }
}
