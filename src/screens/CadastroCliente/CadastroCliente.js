import React, { Component } from "react";
import "./CadastroCliente.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

class CadastroCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: null,
      cpf: null,
      ddd: "12",
      phone_number: null,
      cep: null,
      address: null,
      residetial_number: null,
      neighborhood: null,
      city: null,
      uf: "SP"
    };
  }
  _registerClient = () => {
    axios
      .post(`https://api.vife.dev/stock-management/api/client`, {
        name: "Teste",
        cpf: "this.state.cpf",
        ddd: "this.state.ddd",
        phone_number: "this.state.phone_number",
        cep: "this.state.cep",
        adress: "this.state.adress",
        residetial_number: "this.state.residetial_number",
        neighborhood: "this.state.neighborhood",
        city: "this.state.city",
        uf: "this.state.uf"

      })
      .then(res => {
        const response = res.data;
        const message = response.message;
        console.log(message);
        this.notifySuccess(message);
      })
      .catch(res => {
        console.log(res);
        const message = "Ocorreu um erro interno na aplicação";
        this.notifyError(message);
      });
  };

  notifySuccess = message => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  notifyError = message => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-text card-header-primary">
                  <div className="card-text">
                    <h4 className="card-title text-center">
                      Cadastro de Cliente
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputEmail4">Nome</label>
                          <input
                            onInput={e =>
                              this.setState({ nome: e.target.value })
                            }
                            type="email"
                            className="form-control emm"
                            id="inputEmail4"
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputEmail4">Sobrenome</label>
                          <input
                            onInput={e =>
                              this.setState({ sobrenome: e.target.value })
                            }
                            type="text"
                            className="form-control emm"
                            id="inputEmail4"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputEmail4">Endereço</label>
                          <input
                            onInput={e =>
                              this.setState({ endereco: e.target.value })
                            }
                            type="email"
                            className="form-control emm"
                            id="inputEmail4"
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <label for="inputPassword4">CEP</label>
                          <input
                            onInput={e =>
                              this.setState({ cep: e.target.value })
                            }
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <label for="inputPassword4">Cidade</label>
                          <input
                            onInput={e =>
                              this.setState({ cidade: e.target.value })
                            }
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label for="inputPassword4">Estado</label>
                          <input
                            onInput={e =>
                              this.setState({ estado: e.target.value })
                            }
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label for="inputEmail4">CPF</label>
                          <input
                            onInput={e =>
                              this.setState({ cpf: e.target.value })
                            }
                            type="email"
                            className="form-control emm"
                            id="inputEmail4"
                            placeholder=""
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <label for="inputPassword4">Telefone</label>
                          <input
                            onInput={e =>
                              this.setState({ telefone: e.target.value })
                            }
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            Verificar
                            <span className="form-check-sign">
                              <span className="check" />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="row" align="center">
                        <div className="col-md-12">
                          <Link to="/home">
                            <button
                              type="button"
                              class="btn btn-primary btn1"
                              align="center"
                            >
                              Voltar
                            </button>
                          </Link>
                          <button
                            type="button"
                            class="btn btn-primary btn2"
                            align="center"
                            onClick={() => this._registerClient()}
                          >
                            Cadastrar
                          </button>
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
}

export default CadastroCliente;
