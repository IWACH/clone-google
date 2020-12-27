import React, { Component } from "react";

export default class Options extends Component {
  render() {
    return (
      <div className="options-header">
        <div className="options-header-div">
          <div>
            <span className="icon is-small icon-options">
              <i className="fas fa-search icon-option"></i>
              <span>All</span>
            </span>
            <span className="icon is-small icon-options">
              <i className="fas fa-images icon-option"></i>
              <span>Images</span>
            </span>
            <span className="icon is-small icon-options">
              <i className="fas fa-play-circle icon-option"></i>
              <span>Videos</span>
            </span>
            <span className="icon is-small icon-options">
              <i className="fas fa-map-marker-alt icon-option"></i>
              <span>Maps</span>
            </span>
            <span className="icon is-small icon-options">
              <i className="fas fa-newspaper icon-option"></i>
              <span>News</span>
            </span>
            <span className="icon is-small icon-options">
              <i className="fas fa-ellipsis-v icon-option"></i>
              <span>More</span>
            </span>
          </div>

          <div className ="opcion-is-rigth">
            <span className="icon is-small icon-options">
              <span>Settings</span>
            </span>
            <span className="icon is-small icon-options">
              <span>Tools</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
