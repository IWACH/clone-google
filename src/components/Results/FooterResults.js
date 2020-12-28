import React, { Component } from "react";

export default class FooterResults extends Component {
  render() {
    return (
      <div className={this.props.empty ? "footer-inicio-results is-empty" : "footer-inicio-results"}>
        <div className="footer-row-results">
          <span className="span-row-1-results">Perú</span>
        </div>
        <div className="footer-row-results">
          <span className="row-two-rigth-results">
            <a
              href="https://support.google.com/websearch"
              className="a-row-2-results"
            >
              Help
            </a>
            <a href="https://smallbusiness.withgoogle.com" className="a-row-2-results">
              Send feedback
            </a>
            <a href="https://policies.google.com/privacy" className="a-row-2-results">
              Privacy
            </a>
            <a
              href="https://policies.google.com/terms"
              className="a-row-2-results"
            >
              Terms
            </a>
          </span>
        </div>
      </div>
    );
  }
}
