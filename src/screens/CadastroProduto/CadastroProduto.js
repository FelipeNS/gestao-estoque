import React, { Component } from 'react';
import './CadastroProduto.css'
import { Link } from 'react-router-dom'

import axios from "axios"

class CadastroProduto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pro_codigo: '123esd123',
            pro_name: '',
            pro_description: 'TesteDescricao',
            pro_category: 'TesteCategoria',
            pro_price: 12.00,
        }
    }

    _registerProduct = () => {
        console.log(this.state.pro_category)
        axios.post(`https://api.vife.dev/stock_management/public/api/product`, {
            "code": this.state.pro_codigo,
            "name": this.state.pro_name,
            "description": this.state.pro_description,
            "category": this.state.pro_category,
            "price": this.state.pro_price
        })
        .then(res => {
            const response = res.data;
            console.log(response)
        })
        console.clear() 
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-text card-header-primary">
                                    <div className="card-text">
                                    <h4 className="card-title text-center">Cadastro de Produtos</h4>
                                    </div>
                                </div>
    
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">group</i>
                                                    </span>
                                                </div>
                                                <input onInput={(e) => this.setState({pro_codigo: e.target.value})} type="text" class="form-control" placeholder="Código do Produto" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">group</i>
                                                    </span>
                                                </div>
                                                <input onInput={(e) => this.setState({pro_name: e.target.value})} type="text" class="form-control" placeholder="Nome do Produto" />
                                            </div>
                                            </div>
                                        </div>
    
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="material-icons">group</i>
                                                        </span>
                                                    </div>
                                                    <input onInput={(e) => this.setState({pro_description: e.target.value})} type="text" class="form-control" placeholder="Descrição do Produto" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="material-icons">group</i>
                                                        </span>
                                                    </div>
                                                    <input onInput={(e) => this.setState({pro_category: e.target.value})} type="text" class="form-control" placeholder="Categoria do Produto" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="material-icons">group</i>
                                                        </span>
                                                    </div>
                                                    <input onInput={(e) => this.setState({pro_description: e.target.value})} type="text" class="form-control" placeholder="Valor do Produto"/>
                                                </div>
                                            </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Descrição</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onInput={(e) => this.setState({pro_description: e.target.value})} ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" align="center">
                                    <div className="col-md-12">
                                    <Link to="/home"><button type="button" class="btn btn-primary btn1" align="center">Voltar</button></Link>
                                                <button onClick={this._registerProduct.bind(this)} class="btn btn-primary btn2" align="center" >Cadastrar</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}

export default CadastroProduto;