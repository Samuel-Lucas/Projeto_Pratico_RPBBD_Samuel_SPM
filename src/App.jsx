import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

import Header from './componentes/Header'
import Footer from './componentes/Footer'
import PaginaInicial from './paginas/PaginaInicial'
import Lojas from './paginas/Lojas'
import FaleConosco from './paginas/FaleConosco'
import Produtos from './paginas/Produtos'

export default _ =>
          <div>
            <Header />
              <Switch>
                <Route exact path="/">
                  <Redirect to="/Index" />
                </Route>
                <Route path="/Index" component={PaginaInicial}/>
                <Route path="/Produtos" component={Produtos}/>
                <Route path="/Lojas" component={Lojas}/>
                <Route path="/Fale-Conosco" component={FaleConosco}/>
              </Switch>
            <Footer />
          </div>
  

