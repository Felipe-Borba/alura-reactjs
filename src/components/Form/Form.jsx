import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props) { //optional?
        super(props)
        this.title = ''
        this.text = ''
    }

    _handleTitleChange(event) {
        this.title = event.target.value
    }

    _handleTextChange(event) {
        this.text = event.target.value
    }

    _createNote(event) {
        event.preventDefault()
        event.stopPropagation()
        this.props.createNote(this.title, this.text)
    }

    render() {
        return (
            <form className='form-register'
                onSubmit={this._createNote.bind(this)}
            >
                <input
                    type='text'
                    placeholder='Title'
                    className='form-register_input'
                    onChange={this._handleTitleChange.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder='write your note...'
                    className='form-register_input'
                    onChange={this._handleTextChange.bind(this)}
                />
                <button className='form-register_input form-register_submit'>
                    create note
                </button>
            </form>
        )
    }
}
