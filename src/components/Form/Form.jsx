import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor() {
        super()
        this.title = ''
    }
    
    handleTitleChange(event) {
        this.title = event.target.value
        console.log(this.title);
    }
    
    render() {
        return (
            <form className='form-register'>
                <input
                    type='text'
                    placeholder='Title'
                    className='form-register_input'
                    onChange={this.handleTitleChange.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder='write your note...'
                    className='form-register_input'>
                </textarea>
                <button className='form-register_input form-register_submit'>
                    create note
                </button>
            </form>
        )
    }
}
