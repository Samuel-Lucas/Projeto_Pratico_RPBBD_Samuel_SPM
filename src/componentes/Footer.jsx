import React from 'react'

import bancoInter from "../images/banco_inter.png"
import americanExpress from "../images/american_express.png"
import visa from "../images/visa.jpg"
import masterCard from "../images/mastercard.png"
import pagSeguro from "../images/pagseguro.png"
import elo from "../images/elo.png"
import boleto from "../images/boleto.png"
import ebit from "../images/ebit.jpg"
import compraSegura from "../images/compra_segura.jpg"
import safe from "../images/safe.jpg"

export default function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 p-3">
                        <h4 style={{fontSize: '20px'}}>Atendimento</h4>
                        <p>De segunda à Sexta-feira<br />9h às 18h (Exceto feriados)</p>

                        <p>(11) 94444-4444<br />games.shelter@hotmail.com</p>
                    </div>

                    <div className="col-md-4">
                        <p className="text-center mr-5" style={{marginTop: '75px', fontSize: '20px', textShadow: '2px 2px black'}}>
                            &copy; Games Shelter
                        </p>  
                    </div>

                    <div className="col-md-4 p-3">
                        <h4 style={{fontSize: '20px'}}>Pague com:</h4>

                        <ul>
                            <li>
                                <img src={bancoInter} width="40px" style={{paddingBottom: '5px'}} />
                            </li>
            
                            <li>
                                <img src={americanExpress} width="35px" />
                            </li>
            
                            <li>
                                <img src={visa} width="40px" style={{paddingBottom: '4px'}} />
                            </li>
            
                            <li>
                                <img src={masterCard} width="45px" style={{paddingBottom: '6px'}} />
                            </li>
            
                            <li>
                                <img src={pagSeguro} width="40px" />
                            </li>
            
                            <li>
                                <img src={elo} width="40px" />
                            </li>
            
                            <li>
                                <img src={boleto} width="40px" />
                            </li>
                        </ul>

                        <ul>
                            <li><img src={ebit} width="50px" /></li>
                            <li><img src={compraSegura} width="55px" style={{paddingBottom: '8px'}} /></li>
                            <li><img src={safe} width="55px" style={{paddingBottom: '8px'}} /></li>
                        </ul>       
                    </div>
                </div>
            </div>
        </footer>
    );
}