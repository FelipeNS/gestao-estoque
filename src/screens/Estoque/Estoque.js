import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

class CadastroCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qtd: null,
      id: null
    };
  }

  componentDidMount() {
    console.log();
    this.getId(this.props.location.pathname);
  }

  getId = path => {
    var id = path.replace(/[^0-9]/g, "");
    this.setState({ id: id });
  };

  _addStock = () => {
    axios
      .post(`https://api.vife.dev/stock-management/api/stock/insert`, {
        id: this.state.id,
        quantity: this.state.qtd
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

  _removeStock = () => {
    axios
      .post(`https://api.vife.dev/stock-management/api/stock/remove`, {
        id: this.state.id,
        quantity: this.state.qtd
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
    toast.success(message, {
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
        <nav className="navbar navbar-expand-lg bg-primary fixed-top ">
          <div className="container">
            <a className="navbar-brand" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/home">
                    <a className="nav-link" style={{ color: "#fff" }}>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/cadastro-cliente">
                    <a className="nav-link" style={{ color: "#fff" }}>
                      Cadastro De Cleinte
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cadastro-produto">
                    <a className="nav-link" style={{ color: "#fff" }}>
                      Cadastro De Produto
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <br />
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-text card-header-primary">
                  <div className="card-text">
                    <h4 className="card-title text-center">Estoque</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <label for="inputEmail4">Quantidade no estoque</label>
                          <input
                            onInput={e =>
                              this.setState({ qtd: e.target.value })
                            }
                            type="email"
                            className="form-control emm"
                            id="inputEmail4"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row" align="center">
                        <div className="col-md-12">
                          <button
                            onClick={() => this._addStock()}
                            type="button"
                            class="btn btn-primary btn1"
                            align="center"
                          >
                            Adicionar
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary btn2"
                            align="center"
                            onClick={() => this._removeStock()}
                          >
                            Remover
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
