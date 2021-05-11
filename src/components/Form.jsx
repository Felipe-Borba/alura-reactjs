import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Title' />
                <textarea placeholder='write your note...'></textarea>
                <button>create note</button>
            </form>
        )
    }
}
