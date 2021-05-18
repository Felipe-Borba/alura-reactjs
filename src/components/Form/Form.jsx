import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props) { //optional?
        super(props);
        this.title = '';
        this.text = '';
        this.category = 'without category';
        this.state = { category: [] };

        this._newCategory = this._newCategory.bind(this);
    }

    componentDidMount() {
        this.props.category.subscribe(this._newCategory);
    }

    componentWillUnmount() {
        this.props.category.unsubscribe(this._newCategory);
    }

    _newCategory(category) {
        this.setState({ ...this.state, category });
    }

    _handleTitleChange(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleTextChange(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _handleCategoryChange(event) {
        event.stopPropagation();
        this.category = event.target.value;
    }
    
    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
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
                <select className='form-register_input' onChange={this._handleCategoryChange.bind(this)}>
                    <option>without category</option>
                    {this.state.category.map((category, index) => {
                        return <option key={index}>{category}</option>
                    })}
                </select>
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
