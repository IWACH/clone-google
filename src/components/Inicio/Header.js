import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="header-navbar">
          <a href="https://mail.google.com/mail" className="links-top">
            Gmail
          </a>
          <a href="https://www.google.com.pe/imghp" className="links-top">
            Images
          </a>
          <span className="icon is-medium links-top">
            <i className="fas fa-th"></i>
          </span>
          <a className="navbar-item" href="/">
            <img
              className="profile-picture"
              src="/assets/gk-logo.png"
              alt="foto de perfil"
            />
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
