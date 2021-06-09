import React from 'react'
import CategoryList from '../components/CategoryList'
import PosList from '../components/PosList'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <CategoryList />
      <PosList url={'/posts'} />
    </main>
  )
}

export default Home
