import React from "react";
import "../index.css";
import Form from "../components/Form";
import Table from "../components/Table";
import Title from "../components/Title";

class Results extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Results;