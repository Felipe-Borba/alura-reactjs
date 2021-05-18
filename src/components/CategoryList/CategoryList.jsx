import React, { Component } from 'react'
import './CategoryList.css'

export default class CategoryList extends Component {
    componentDidMount() {
        this.props.category.subscribe(this._newCategory.bind(this));
    }

    _newCategory(category) {
        console.log(category);
    }

    _handler(e) {
        if (e.key === 'Enter') {
            let categoryValue = e.target.value;
            this.props.addCategory(categoryValue);
        }
    }

    render() {
        return (
            <section className='category-list'>
                <ul className='category-list_list'>
                    {this.props.category.category.map((category, index) => {
                        return <li key={index} className='category-list_item'>{category}</li>
                    })}
                </ul>
                <input
                    type='text'
                    className='category-list_input'
                    placeholder='Add category'
                    onKeyUp={this._handler.bind(this)}
                />
            </section>
        )
    }
}
