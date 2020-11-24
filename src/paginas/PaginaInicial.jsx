import React from 'react'

export default function PaginaInicial () {

    return (
        <section className="jumbotron-fluid">
            <h2 className="text-dark text-center pt-3">Seja bem vindo(a) !</h2>
            <p className="text-center">A loja de acessórios que presta o melhor serviço !</p>

            <div className="container d-flex flex-column">
                
                    <div className="col-md-6 d-flex align-self-center">
                        <img src="/images/acessories.jpg" className="img-fluid" width='650' />
                    </div>

                    <div className="col-md- d-flex justify-content-center m-4">
                        
                            <a href="produtos.html" className="btn btn-primary mx-auto text-light">
                                Confira nossos produtos
                            </a>
                    </div>
            </div>
        </section>
    );
}