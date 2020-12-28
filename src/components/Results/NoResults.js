import React, { Component } from "react";

export default class NoResults extends Component {
  render() {
    return (
      <div className="content noResult-content">
        <p className="your-search">
          Your search - <span className="searchString">{this.props.searchString}</span> - did not match
          any documents.
        </p>
        <p className="suggestions">Suggestions:</p>
        <ul className="ul-content">
          <li className="li-content">
            Make sure that all words are spelled correctly.
          </li>
          <li className="li-content">Try different keywords.</li>
          <li className="li-content">Try more general keywords.</li>
        </ul>
      </div>
    );
  }
}
