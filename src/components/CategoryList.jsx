import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../api/api'
import '../assets/css/blog.css'

const CategoryList = () => {

    const [categories, setCategory] = useState([])

    useEffect(() => {
        search(`/categorias`, setCategory)
    }, [])

    return (
        <ul className='lista-categorias container flex'>
            {
                categories.map((category) => (
                    <Link to={`/categoria/${category.id}`} >
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${category.id}`} >
                            {category.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default CategoryList
