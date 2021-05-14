import React, { Component } from 'react'
import './CategoryList.css'

export default class CategoryList extends Component {
    render() {
        return (
            <section className='category-list'>
                <ul className='category-list_list'>
                    <li>teste</li>
                    <li>teste</li>
                    <li>teste</li>
                </ul>
                <input
                    type='text'
                    className='category-list_input'
                />
            </section>
        )
    }
}
