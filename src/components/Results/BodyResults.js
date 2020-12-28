import React, { Component } from "react";
import Axios from "axios";
import NoResults from "./NoResults";
import FooterResults from "./FooterResults";
import { Loading } from "../Loading";

export default class BodyResults extends Component {
  state = {
    searchs: [],
    loading: false,
  };
  componentDidMount() {
    this.listSearchs();
  }

  listSearchs = () => {
    this.setState(
      {
        loading: true,
      },
      () => {
        Axios.get("/api/query", {
          params: { searchString: this.props.searchString },
        }).then((response) => {
          this.setState({
            searchs: response.data.data,
            loading: false,
          });
        });
      }
    );
  };

  renderContent = (searchs, loading) => {
    if (searchs.length === 0) {
      return loading ? <Loading /> : <NoResults searchString={this.props.searchString} />;
    } else {
      return (
        <div className="body-content">
          <div className="about-results">
            <span>About 256 000 000 results (0.72 seconds)</span>
          </div>
          <div className="content-results">
            {searchs.map((s, ix) => {
              return (
                <div className="content-card" key={ix}>
                  <div className="url">{s.link}</div>
                  <a href={s.link} className="titulo" target="_blank" rel="noreferrer">{s.title}</a>
                  <span className="descripcion">{s.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };
  render() {
    let { searchs, loading } = this.state;
    return (
      <div>
        {this.renderContent(searchs, loading)}
        <FooterResults empty={searchs.length < 5} />
      </div>
    );
  }
}
