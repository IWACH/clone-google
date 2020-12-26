import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-inicio">
        <div className="footer-row">
          <span className="span-row-1">Perú</span>
        </div>
        <div className="footer-row">
          <span className="row-two-rigth">
            <a
              href="https://ads.google.com/intl/en_pe/home"
              className="a-row-2"
            >
              Advertising
            </a>
            <a href="https://smallbusiness.withgoogle.com" className="a-row-2">
              Business
            </a>
            <a href="https://about.google/" className="a-row-2">
              About
            </a>
            <a
              href="https://www.google.com/search/howsearchworks/"
              className="a-row-2"
            >
              How Search works
            </a>
          </span>
          <span className="row-2-left">
            <a href="https://policies.google.com/privacy" className="a-row-2">
              Privacy
            </a>
            <a href="https://policies.google.com/terms" className="a-row-2">
              Terms
            </a>

            <div
              className={`dropdown is-up is-right is-hoverable`}
            >
              <div className="dropdown-trigger">
                <a href="*"className="a-row-2">
                  Settings
                </a>
              </div>
              <div className="dropdown-menu" role="menu">
                <div className="dropdown-content dpd-content">
                  <a href="/" className="dropdown-item item-dpd">
                    Search Settings
                  </a>
                  <a href="/" className="dropdown-item item-dpd">
                    Advanced Search
                  </a>
                  <a href="/" className="dropdown-item item-dpd">
                    Your data in Search
                  </a>
                  <a href="/" className="dropdown-item item-dpd">
                    Search History
                  </a>
                  <a href="/" className="dropdown-item item-dpd">
                    Search Help
                  </a>
                  <a href="/" className="dropdown-item item-dpd">
                    Send feddback
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}
