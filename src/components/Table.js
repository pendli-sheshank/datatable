import React, { Component } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Container } from "react-bootstrap";
import "../App.css";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userId",
    text: "User ID",
    sort: true,
  },
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userId",
    text: "User ID",
    sort: true,
  },
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userId",
    text: "User ID",
    sort: true,
  },
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userId",
    text: "User ID",
    sort: true,
  },
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userId",
    text: "User ID",
    sort: true,
  },
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userId",
    text: "User ID",
    sort: true,
  },
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userId",
    text: "User ID",
    sort: true,
  },
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "userId",
    text: "User ID",
    sort: true,
  },
];

class Table extends Component {
  state = {
    data: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
      res.json().then((json) => {
        this.setState({ data: json });
        console.log(this.state);
      })
    );
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          striped
          hover
          condensed
          wrapperClasses="table-responsive"
          rowClasses="custom-row-class"
          pagination={paginationFactory()}
          filter={filterFactory()}
          filterPosition="bottom"
        />
      </Container>
    );
  }
}

export default Table;
