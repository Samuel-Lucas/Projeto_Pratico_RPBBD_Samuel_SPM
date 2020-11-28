import React from 'react'

export default class Produtos extends React.Component {

    constructor(props) {
        super(props);
        this.exibirCategoria = this.exibirCategoria.bind(this);
    }

    exibirCategoria(e, categoria) {

        let produtos = document.querySelectorAll('div#computadores, div#notebooks, div#videogames, div#acessorios')

        if(categoria == 'todos') {
            for(let i = 0; i < produtos.length; i++) {

                produtos[i].style.display = 'flex'    
            }
        } else {
        
            for(let i = 0; i < produtos.length; i++) {

                if(produtos[i].id == categoria) {
                    produtos[i].style.display = 'flex'
                } else {
                    produtos[i].style.display = 'none'
                }
            }
        }

        let listas = document.querySelectorAll('#listaCategoria li')

        for (let j = 0; j < listas.length; j++) {
            listas[j].style.backgroundColor = 'white'
            listas[j].style.color = 'black'
        } 

        let lista = e.target
        lista.style.backgroundColor = 'blue'
        lista.style.color = 'white'
    }

    render() {
        return (
        <section>

            <div className="container">
                <div className="row d-flex flex-nowrap">
                    <div className="col-md-3 lista w-50">
                        <h4>Categorias</h4>

                        <ul id="listaCategoria">
                            <li onClick={(e) => this.exibirCategoria(e, 'todos')}>Todos</li>
                            <li onClick={(e) => this.exibirCategoria(e, 'computadores')}>Computadores</li>
                            <li onClick={(e) => this.exibirCategoria(e, 'notebooks')}>Notebooks</li>
                            <li onClick={(e) => this.exibirCategoria(e, 'videogames')}>Videogames</li>
                            <li onClick={(e) => this.exibirCategoria(e, 'acessorios')}>Acessórios</li>
                        </ul>
                    </div>

                    <div id="container">

                        {this.props.arrayProdutos.map( row =>

                            <div id={row.categoria} className="card border-0" style={{maxWidth: '16rem'}}>
                                <img className="card-img-top" onclick="abreImg()" src={row.imagem} className="img-fluid"/>
                                <div className="card-body">
                                <p className="card-text border-bottom">{row.descricao}</p>
                                <p><del>{row.preco}</del></p>
                                <p className="preco_descontado">{row.preco_venda}</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section> 
    );
    }
}