import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { search } from "../api/api";

const PosList = ({ url }) => {

    const [posts, setPosts] = useState([{
        "id": 1,
        "title": "Banho no cão",
        "metadescription": "Use as utensilios certos para banhar seu cão",
        "body": "A maioria dos cães prefere pular a hora do banho, mas o banho desempenha um papel importante na saúde do pelo e da pele do seu cão, ajudando a mantê-lo limpo e livre de sujeira e parasitas. Ter os produtos certos pode ajudá-lo a se sentir mais confortável.",
        "categoria": "bem-estar",
        "subcategoria": "higiene"
      },
      {
        "id": 2,
        "title": "Seu cachorro merece um tapete higiênico",
        "metadescription": "O banheiro que seu cachorro merece",
        "body": "Os tapetes higiênicos são uma inovação do mercado pet, perfeitos para que seu cão faça suas necessidades com conforto e sem sujar a casa. São produtos descartáveis ou laváveis que garantem conforto ao animal.",
        "categoria": "bem-estar",
        "subcategoria": "higiene"
      }])

    useEffect(() => {
        search(url, setPosts)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='posts container' >
            {
                posts.map((post) => (
                    <Link className={`cartao-post cartao-post--${post.categoria}`}>
                        <article key={post.id}>
                            <h3 className='cartao-post__titulo'>
                                {post.title}
                            </h3>
                            <p className='cartao-post__meta'>
                                {post.metadescription}
                            </p>
                        </article>
                    </Link>
                ))
            }
        </section>
    )
}

export default PosList
