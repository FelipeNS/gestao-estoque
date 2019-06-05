import React, { Component } from "react";
import "./CadastroProduto.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

class CadastroProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: "123esd123",
      name: "",
      description: "TesteDescricao",
      category: "TesteCategoria",
      price: 12.0,
      stock_quantity: 123
    };
  }

  _registerProduct = () => {
    axios
      .post(`https://api.vife.dev/stock-management/api/product`, {
        code: this.state.codigo,
        name: this.state.name,
        description: this.state.description,
        category: this.state.category,
        price: this.state.price,
        stock_quantity: this.state.stock_quantity
      })
      .then(res => {
        const response = res.data;
        const message = response.message;
        console.log(message);
        this.notifySuccess(message);
      })
      .catch(res => {
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
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-text card-header-primary">
                  <div className="card-text">
                    <h4 className="card-title text-center">
                      Cadastro de Produtos
                    </h4>
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
                        <input
                          onInput={e =>
                            this.setState({ codigo: e.target.value })
                          }
                          type="text"
                          class="form-control"
                          placeholder="Código do Produto"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">group</i>
                          </span>
                        </div>
                        <input
                          onInput={e => this.setState({ name: e.target.value })}
                          type="text"
                          class="form-control"
                          placeholder="Nome do Produto"
                        />
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
                        <input
                          onInput={e =>
                            this.setState({ description: e.target.value })
                          }
                          type="text"
                          class="form-control"
                          placeholder="Descrição do Produto"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">group</i>
                          </span>
                        </div>
                        <input
                          onInput={e =>
                            this.setState({ category: e.target.value })
                          }
                          type="text"
                          class="form-control"
                          placeholder="Categoria do Produto"
                        />
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
                      <input
                        onInput={e =>
                          this.setState({ description: e.target.value })
                        }
                        type="text"
                        class="form-control"
                        placeholder="Valor do Produto"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Descrição
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          onInput={e =>
                            this.setState({ description: e.target.value })
                          }
                        />
                      </div>
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
                        onClick={this._registerProduct.bind(this)}
                        class="btn btn-primary btn2"
                        align="center"
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
    );
  }
}

export default CadastroProduto;
