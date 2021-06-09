import React from 'react'
import { useParams } from 'react-router'
import PostList from '../components/PostList'

const SubCategory = () => {
    const { subCategory } = useParams()

    return (
        <PostList url={`/posts?subcategoria=${subCategory}`} />
    )
}

export default SubCategory
