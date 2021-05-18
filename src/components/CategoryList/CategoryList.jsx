import React, { Component } from 'react'
import './CategoryList.css'

export default class CategoryList extends Component {
    constructor() {
        super();
        this.state = { category: [] };
        this._newCategory = this._newCategory.bind(this);
    }

    componentDidMount() {
        this.props.category.subscribe(this._newCategory);
    }

    componentWillUnmount(){
        this.props.category.unsubscribe(this._newCategory);
    }

    _newCategory(category) {
        this.setState({ ...this.state, category });
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
                    {this.state.category.map((category, index) => {
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
