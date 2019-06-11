import React, { Component } from "react";
import "./Estoque.css";
import { Link } from "react-router-dom";

import axios from "axios";

class Estoque extends Component {
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
                  <Link to="home">
                    <a className="nav-link" style={{ color: "#fff" }}>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item active">
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
      </>
    );
  }
}
export default Estoque;
