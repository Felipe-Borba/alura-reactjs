import React from 'react'
import CategoryList from '../components/CategoryList'
import PosList from '../components/PosList'
import { Route, useParams, useRouteMatch } from 'react-router'
import '../assets/css/blog.css'

const Category = () => {
    const { id } = useParams()
    const { path } = useRouteMatch()

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <CategoryList />
            <Route exact path={`${path}/`}>
                <PosList url={`/posts?categoria=${id}`} />
            </Route>
        </>
    )
}

export default Category