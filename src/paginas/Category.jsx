import React, { useEffect, useState } from 'react'
import CategoryList from '../components/CategoryList'
import PosList from '../components/PosList'
import { Route, useParams, useRouteMatch } from 'react-router'
import { search } from '../api/api'
import { Link } from 'react-router-dom'
import SubCategory from './SubCategory'
import '../assets/css/blog.css'

const Category = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    const [subCategories, setSubCategories] = useState([])

    useEffect(() => {
        search(`/categorias/${id}`, (category) => {
            setSubCategories(category.subcategorias)
        })
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <CategoryList />

            <ul className="lista-categorias container flex">
                {
                    subCategories.map((subcategory) => (
                        <li
                            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                            key={subcategory}
                        >
                            <Link to={`${url}/${subcategory}`}>
                                {subcategory}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <switch>               
                <Route exact path={`${path}/`}>
                    <PosList url={`/posts?categoria=${id}`} />
                </Route>

                <Route path={`${path}/:subCategory`}>
                    <SubCategory />
                </Route>
            </switch>
        </>
    )
}

export default Category