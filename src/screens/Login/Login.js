import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import api from "../../services/Api";

import "../../assets/css/styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  // Login
  signIn = () => {
    api
      .get("https://api.vife.dev/stock-management/api/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("passou aqui 1");
        console.log(response);
        if (response.data.success === 1) {
          window.location.href = "/home";
        } else {
          console.log(response.data.message);
        }
      })
      .catch(response => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <>
        <form method="get">
          <div className="container" align="center">
            <div className="row">
              <div className="col-12">
                <img
                  className="img-fluid logo"
                  src="https://vife.dev/assets/images/logo.png"
                />
                <div className="card card-container" align="left">
                  <div className="card-body login-card">
                    <p
                      className="text-center login-text"
                      style={{ marginTop: 30 }}
                    >
                      Login
                    </p>
                    <div className="container-input">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating input-login">
                              E-mail
                            </label>
                            <input
                              type="email"
                              label="Email"
                              className="form-control"
                              onInput={e =>
                                this.setState({ email: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating input-login">
                              Senha
                            </label>
                            <input
                              type="password"
                              label="Senha"
                              className="form-control"
                              onInput={e =>
                                this.setState({ password: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container" align="center">
                        <button
                          onClick={() => this.signIn()}
                          type="button"
                          className="btn btn-primary button"
                        >
                          ENTRAR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
