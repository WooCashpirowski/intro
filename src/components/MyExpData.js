import React, { Component } from "react";
import { client } from "../client";
import MyExpItems from "./MyExpItems";

export default class MyExperience extends Component {
  state = {
    experienceItems: [],
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: "experienceItem",
        order: "-fields.id",
      })
      .then((res) => {
        this.setState({
          experienceItems: res.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <>
        <MyExpItems
          darkMode={this.props.darkMode}
          items={this.state.experienceItems}
        />
      </>
    );
  }
}
