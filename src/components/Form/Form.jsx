import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    render() {
        return (
            <form className='form-register'>
                <input
                    type='text'
                    placeholder='Title'
                    className='form-register_input'
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
