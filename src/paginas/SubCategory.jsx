import React from 'react'
import { useParams } from 'react-router'
import PosList from '../components/PosList'

const SubCategory = () => {
    const { subCategory } = useParams()

    return (
        <PosList url={`/posts?subcategoria=${subCategory}`} />
    )
}

export default SubCategory
