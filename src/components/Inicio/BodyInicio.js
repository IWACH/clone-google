import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { BuscadorInicio } from "../Utils/Buscadores";

export default class BodyInicio extends Component {
  state = {
    search: "",
  };

  changeValue = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  enter = (e) => {
    if (e.keyCode === 13) {
     return window.location.href = `/search/${this.state.search}`;
    }
  };

  search = () => {};
  render() {
    return (
      <div className="inicio">
        <div className="inicio-wrapper">
          <img
            src="/assets/google-logo.png"
            alt="Logo de Google"
            className="logo-google"
            width="272"
            height="92"
          />
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-rounded input-inicio"
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.changeValue}
              onKeyUp={this.enter}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </span>
            <span className="icon is-small is-right">
              <img
                src="/assets/microfone.png"
                alt="Microfono de Google"
                width="15"
                height="18"
              />
            </span>
          </div>
          <div className="box-buttons">
            <Link to={`/search/${this.state.search}`}>
              <div className="button button-inicio" onClick={this.search}>
                Google Search
              </div>
            </Link>
            <a
              href="https://www.google.com/doodles/"
              target="_blank"
              rel="noreferrer"
              className="button button-inicio"
            >
              I'm Feeling Lucky
            </a>
          </div>
          <div className="language-inicio">
            Google offered in: <a href="/">Español (Latinoamérica)</a>
          </div>
        </div>
      </div>
    );
  }
}
