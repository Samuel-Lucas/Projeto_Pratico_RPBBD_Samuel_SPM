import React from 'react'

export default function Header() {
    
    return (
        <header>
            <nav className="navbar navbar-expand-sm">

                <div className="container">

                    <a href="pagina_inicial.html" className="logo">
                        <h3>Games<br /><i>Shelter</i></h3>
                    </a>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navPrincipal">
                            <span className="navbar-toggle-icon">
                                <i className="fas fa-bars" />
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navPrincipal">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item menu_item" onmouseover="mudaEstilo()">
                                    <a href="produtos.html"><h4>Produtos</h4></a>
                                </li>

                                <li className="nav-item menu_item" onmouseover="mudaEstilo()">
                                    <a href="lojas.html"><h4>Lojas</h4></a>
                                </li>

                                <li className="nav-item menu_item" onmouseover="mudaEstilo()">
                                    <a href="fale_conosco.html"><h4>Fale conosco</h4></a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </header>
    );
}