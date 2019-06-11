import React, { Component } from "react";
import axios from "axios";

import Estoque from "../Estoque/Estoque";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    console.clear();
    this._getProducts();
  }

  _getProducts = () => {
    axios
      .get(`https://api.vife.dev/stock-management/api/product/all`)
      .then(res => {
        const response = res.data;
        this.setState({
          produtos: response,
          loading: false
        });
        console.log(res);
      })
      .catch(resp => {
        console.log(resp);
        this.setState({ null: true });
        alert("Você não possuí produtos");
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      produtos: null,
      loading: true,
      null: false
    };
  }

  render() {
    if (this.state.loading !== true) {
      if (!this.state.null) {
        if (this.state.produtos) {
          var lista = this.state.produtos.map(function(data) {
            return (
              <tr key={data.id}>
                <td className="text-center">{data.id}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.category}</td>
                <td className="text-right">R$ {data.price}</td>
                <td className="text-right">{data.stock_quantity}</td>
                <td className="td-actions text-right">
                  <Link to={`/estoque/${data.id}`} id={data.id}>
                    <button
                      type="button"
                      rel="tooltip"
                      className="btn btn-round"
                    >
                      <i className="material-icons">edit</i>
                    </button>
                  </Link>
                </td>
              </tr>
            );
          });
        }
      } else {
        window.location.href = "/cadastro-produto";
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
        <div className="container">
          <br />
          <br />
          <div style={{ marginTop: 100 }}>
            <div className="card">
              <div className="card-header card-header-text card-header-primary">
                <div className="card-text">
                  <h4 className="card-title text-center">Lista de produtos</h4>
                </div>
              </div>
              <br />
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Nome do Produto</th>
                      <th>Descrição</th>
                      <th>Categoria</th>
                      <th className="text-right">Preço</th>
                      <th className="text-right">Qtd. Estoque</th>
                      <th className="text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.loading ? (
                      <div className="container">
                        <div align="center">
                          <img
                            src="https://thumbs.gfycat.com/UnitedSmartBinturong-max-1mb.gif"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    ) : (
                      lista
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
