import React from 'react';
import ReactDOM from 'react-dom';

import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import CadastroProduto from './screens/CadastroProduto/CadastroProduto';
import CadastroCliente from './screens/CadastroCliente/CadastroCliente';
import Estoque from './screens/Estoque/Estoque';

import { BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/cadastro-produto" component={CadastroProduto} />
            <Route path="/cadastro-cliente" component={CadastroCliente} />
            <Route path="/Estoque" component={Estoque} />
            <Route path="*" component={Login} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));