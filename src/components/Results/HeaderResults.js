import React, { Component } from "react";
import { isUndefined } from 'lodash'

class HeaderResults extends Component {
  state = {
    search: undefined,
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
  render() {
    let searchString = isUndefined(this.state.search) ? this.props.searchString : this.state.search;
    return (
      <div>
        <nav className="header-navbar-results">
          <div className="navbar-results-left">
            <a href="/">
              <img
                src="/assets/google-logo.png"
                alt="Logo de Google"
                className="logo-google-results"
                width="92"
                height="33"
              />
            </a>

            <span className="buscador-results">
              <div className="buscadorResults">
                <div className="control has-icons-right">
                  <input
                    className="input is-rounded input-inicio-results"
                    type="text"
                    name="search"
                    value={searchString}
                    onChange={this.changeValue}
                    onKeyUp={this.enter}
                  />
                  <span className="icon is-small is-right icons-rigtht">
                    <span className="icon is-small icon-delete">
                      <i className="fas fa-times"></i>
                    </span>
                    <img
                      className="icon-microfone"
                      src="/assets/microfone.png"
                      alt="Microfono de Google"
                      width="15"
                      height="18"
                    />
                    <span className="icon is-small icon-search">
                      <i className="fas fa-search"></i>
                    </span>
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div className="navbar-results-rigth">
            <span className="icon is-medium links-top">
              <i className="fas fa-th"></i>
            </span>
            <a className="navbar-item" href="/">
              <span className="profile-picture">IA</span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderResults;
