import React from 'react'

export default function Produtos () {

    return (
        <section>
            <div className="container">
                <div className="row d-flex flex-nowrap">
                    <div className="col-md-3 lista w-50">
                        <h4>Categorias</h4>

                        <ul>
                            <li onmouseover="mudaEstilo2()" onclick="exibirCategoria('todos')">Todos</li>
                            <li onmouseover="mudaEstilo2()" onclick="exibirCategoria('computadores')">Computadores</li>
                            <li onmouseover="mudaEstilo2()" onclick="exibirCategoria('notebooks')">Notebooks</li>
                            <li onmouseover="mudaEstilo2()" onclick="exibirCategoria('videogames')">Videogames</li>
                            <li onmouseover="mudaEstilo2()" onclick="exibirCategoria('acessorios')">Acessórios</li>
                        </ul>
                    </div>

                    <div id="container" className="todos">

                        <div className="card border-0" style={{maxWidth: '16rem'}}>
                            <img className="card-img-top" onclick="abreImg()" src="/images/pc.jpg" className="img-fluid"/>
                            <div className="card-body">
                              <p className="card-text border-bottom">Pc Gamer G-Fire Htg-686 A6 7480 8Gb <br/> (Radeon R5 2Gb) SSD 240Gb monitor 18"</p>
                              <p><del>R$ 4199</del></p>
                              <p className="preco_descontado">R$ 3499</p>
                            </div>
                        </div>

                        <div className="card border-0" style={{maxWidth: '16rem'}}>
                            <img className="card-img-top" onclick="abreImg()" src="/images/note.jpg" className="img-fluid"/>
                            <div className="card-body">
                              <p className="card-text border-bottom">Notebook Gamer Lenovo Intel Core i7-9750H 8GB 1TB <br/> Placa GTX 1050 15,6"
                                Windows 10 L340</p>
                                <p><del>R$ 4399</del></p>
                                <p className="preco_descontado">R$ 3899</p>
                            </div>
                        </div>

                        <div className="card border-0" style={{maxWidth: '16rem'}}>
                            <img className="card-img-top" onclick="abreImg()" src="/images/ps5.jpg" className="img-fluid"/>
                            <div className="card-body">
                              <p className="card-text border-bottom">Console Playstation 5 <br/> SSD 1 TB, 1 controle</p>
                              <p><del>R$ 4999</del></p>
                              <p className="preco_descontado">R$ 4499</p>
                            </div>
                        </div>

                        <div className="card border-0" style={{maxWidth: '16rem'}}>
                            <img className="card-img-top" onclick="abreImg()" src="/images/teclado_mecanico.jpg" style={{width: '170px'}} className="img-fluid"/>
                            <div className="card-body">
                              <p className="card-text border-bottom">Teclado Mecânico Gamer Redragon Kala RGB, Switch Red, ABNT-2, K557RGB</p>
                              <p><del>R$ 159</del></p>
                              <p className="preco_descontado">R$ 119</p>
                            </div>
                        </div>

                        <div className="card border-0" style={{maxWidth: '16rem'}}>
                            <img className="card-img-top" onclick="abreImg()" src="/images/xsx.jpg" className="img-fluid"/>
                            <div className="card-body">
                              <p className="card-text border-bottom">Console Xbox Series X <br/> SSD 1 TB, 1 controle</p>
                              <p><del>R$ 4999</del></p>
                              <p className="preco_descontado">R$ 4499</p>
                            </div>
                        </div>

                        <div className="card border-0" style={{maxWidth: '16rem'}}>
                            <img className="card-img-top" onclick="abreImg()" src="/images/mouse.jpg" style={{width: '180px'}} className="img-fluid"/>
                            <div className="card-body">
                              <p className="card-text border-bottom">Mouse Gamer Redragon Ranger Black RGB 12400dpi M910-RGB</p>
                              <p><del>R$ 159</del></p>
                              <p className="preco_descontado">R$ 99</p>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        </section>
    );
}