import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    axios
      .get(`https://api.vife.dev/stock-management/api/product/all`)
      .then(res => {
        const response = res.data;
        this.setState({
          produtos: response,
          loading: false
        });
      })
      .catch(resp => {
        console.log(resp);
        alert("Você não possuí produtos");
      });
    console.clear();
  }

  constructor(props) {
    super(props);
    this.state = {
      produtos: null,
      loading: true
    };
  }

  render() {
    if (this.state.loading !== true) {
      if (this.state.produtos) {
        var lista = this.state.produtos.map(function(data) {
          return (
            <tr key={data.id}>
              <td className="text-center">{data.id}</td>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td className="text-right">R$ {data.price}</td>
              <td className="td-actions text-right">
                <button
                  type="button"
                  rel="tooltip"
                  className="btn btn-info btn-round"
                >
                  <i className="material-icons">person</i>
                </button>
                <button
                  type="button"
                  rel="tooltip"
                  className="btn btn-success btn-round"
                >
                  <i className="material-icons">edit</i>
                </button>
                <button
                  type="button"
                  rel="tooltip"
                  className="btn btn-danger btn-round"
                >
                  <i className="material-icons">close</i>
                </button>
              </td>
            </tr>
          );
        });
      }
    }
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
                <li className="nav-item active">
                  <a className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="cadastro-cliente">
                    <a className="nav-link" style={{ color: "#fff" }}>
                      Cadastro De Cleinte
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="cadastro-produto">
                    <a className="nav-link" style={{ color: "#fff" }}>
                      Cadastro De Produto
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ marginTop: 150, marginLeft: "35%" }}>
          <button
            class="btn btn-primary btn-fab btn-fab-mini btn-round"
            style={{ width: 100, height: 100, fontSize: 50, marginRight: 100 }}
          >
            <Link to="/cadastro-produto">
              <i
                class="material-icons"
                style={{ fontSize: 50, marginTop: 35, color: "#fff" }}
              >
                add
              </i>
            </Link>
          </button>
          <button
            class="btn btn-primary btn-fab btn-fab-mini btn-round"
            style={{ width: 100, height: 100, fontSize: 50, marginRight: 100 }}
          >
            <i class="material-icons" style={{ fontSize: 50, marginTop: 35 }}>
              edit
            </i>
          </button>
          <button
            class="btn btn-primary btn-fab btn-fab-mini btn-round"
            style={{ width: 100, height: 100, fontSize: 50, marginRight: 100 }}
          >
            <i class="material-icons" style={{ fontSize: 50, marginTop: 35 }}>
              close
            </i>
          </button>
        </div>
        <div style={{ marginTop: 100 }}>
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Nome do Produto</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th className="text-right">Preço</th>
                    <th className="text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.loading ? (
                    <div>
                      <p align="center">Carregando</p>
                    </div>
                  ) : (
                    lista
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
