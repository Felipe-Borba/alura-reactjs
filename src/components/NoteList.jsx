import React, { Component } from 'react'
import CardNote from './CardNote/CardNote'


export default class NoteList extends Component {
    render() {
        return (
            <ul>
                {Array.of('Job', 'study', 'etc').map((category, index) => {
                    return (
                        <li key={index} >
                            <div>{category}</div>
                            <CardNote />
                        </li>
                    );
                })}

            </ul>
        )
    }
}
