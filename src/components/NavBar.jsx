import React from 'react'
import doguito from '../assets/img/doguito.svg'
import '../assets/css/componentes/cabecalho.css'

const NavBar = () => {
    return (
        <header className='cabecalho container' >
            <div className='menu-hamburger' >
                <span className='menu-hamburger__icone'>
                </span>
            </div>
            <div className='cabecalho-container' >
                <a href="/" className='flex flex--centro' >
                    <img className='cabecalho__logo' src={doguito} alt="logo doguito" />
                    <h1 className='cabecalho__titulo' >PetShop</h1>
                </a>
            </div>

            <nav className='menu-cabecalho' >
                <ul className='menu-itens' >
                    <li><a href="#section " className="menu-item menu-item--entrar">Entrar</a></li>
                    <li><a href="#section " className="menu-item">Produtos</a></li>
                    <li><a href="/" className="menu-item">Blog</a></li>
                    <li><a href="/sobre" className="menu-item">Sobre</a></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>
        </header>
    )
}

export default NavBar
