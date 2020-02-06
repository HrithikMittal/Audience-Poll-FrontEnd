import React, { Component } from "react";
import axios from "axios";
import Sortable from "./Sortable";

class Ranking extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/team/getteams")
      .then(teams => {
        this.setState({ teams: teams.data });
      })
      .catch(err => {
        console.log("Error is ", err);
      });
  }
  render() {
    const teamsToBeRender = this.state.teams.map(team => {
      return (
        <h1>
          <Sortable />
        </h1>
      );
    });
    return <div>{teamsToBeRender}</div>;
  }
}

export default Ranking;
