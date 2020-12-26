import React, { Component } from "react";

export default class BodyInicio extends Component {
  render() {
    return (
        <div className="inicio">
          <div className="inicio-wrapper">
            <img
              src="/assets/google-logo.png"
              alt="Logo de Google"
              width="272"
              height="92"
            />
            <div className="control has-icons-left has-icons-right">
              <input className="input is-rounded input-inicio" type="text" />
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
              <div className="box-buttons">
                <div className="button button-inicio">Google Search</div>
                <a
                  href="https://www.google.com/doodles/"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-inicio"
                >
                  I'm Feeling Lucky
                </a>
              </div>
            </div>
            <div className="language-inicio">
              Google offered in: <a href="/">Español (Latinoamérica)</a>
            </div>
          </div>
        </div>
    );
  }
}
