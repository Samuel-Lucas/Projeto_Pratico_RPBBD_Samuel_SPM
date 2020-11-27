import React from 'react'

export default class Produtos extends React.Component {
    
    render() {
        return (
        <section>

            <div className="container">
                <div className="row d-flex flex-nowrap">
                    <div className="col-md-3 lista w-50">
                        <h4>Categorias</h4>

                        <ul>
                            <li onclick="exibirCategoria('todos')">Todos</li>
                            <li onclick="exibirCategoria('computadores')">Computadores</li>
                            <li onclick="exibirCategoria('notebooks')">Notebooks</li>
                            <li onclick="exibirCategoria('videogames')">Videogames</li>
                            <li onclick="exibirCategoria('acessorios')">Acessórios</li>
                        </ul>
                    </div>

                    <div id="container" className="todos">

                        {this.props.arrayProdutos.map( row =>

                            <div className="card border-0" style={{maxWidth: '16rem'}}>
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