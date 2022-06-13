import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="header-navbar-inicio">
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
            <span className="profile-picture">IA</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
