import React from 'react';
import './CadastroCliente.css'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-text card-header-primary">
                                <div className="card-text">
                                    <h4 className="card-title text-center">Cadastro de Cliente</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Nome</label>
                                                <input type="email" className="form-control emm" id="inputEmail4" placeholder="" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Sobrenome</label>
                                                <input type="email" className="form-control emm" id="inputEmail4" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Email</label>
                                                <input type="email" className="form-control emm" id="inputEmail4" placeholder="" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="inputPassword4">Senha</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="inputEmail4">Endereço</label>
                                                <input type="email" className="form-control emm" id="inputEmail4" placeholder="" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputPassword4">CEP</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputPassword4">Cidade</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-3">
                                                <label for="inputState">Estado</label>
                                                
                                            </div></div>
                                        <div className="form-row">
                                            <div className="form-group col-md-3">
                                                <label for="inputEmail4">CPF</label>
                                                <input type="email" className="form-control emm" id="inputEmail4" placeholder="" />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label for="inputPassword4">Telefone</label>
                                                <input type="password" className="form-control" id="inputPassword4" placeholder="" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" value="" />
                                                    Verificar
                                                            <span className="form-check-sign">
                                                        <span className="check"></span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row" align="center">
                                            <div className="col-md-12">
                                               
                                                <Link to="/home"><button type="button" class="btn btn-primary btn1" align="center">Voltar</button></Link>
                                                <button type="button" class="btn btn-primary btn2" align="center">Cadastrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
} 