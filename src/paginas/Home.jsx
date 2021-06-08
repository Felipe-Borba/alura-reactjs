import React from 'react'
import PosList from '../components/PosList'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      
      <PosList url={'/posts'}/>

    </main>
  )
}

export default Home
