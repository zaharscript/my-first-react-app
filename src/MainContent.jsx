import React, { Component } from "react";

export default class MainComponent extends Component {
  state = {
    pageTitle: "Customers",
    count: 5,
    customers: [
      { id: 1, name: "Zahra", Phone: "123-234" },
      { id: 2, name: "Annas", Phone: "143-254" },
      { id: 3, name: "Baihaqi", Phone: "363-876" },
      { id: 4, name: "Hadi", Phone: "122-267" },
      { id: 5, name: "Muhaimin", Phone: "101-839" },
    ],
  };
  render() {
    return (
      <div className="text-center">
        <h3>
          {this.state.pageTitle}
          <span className="badge bg-secondary  m-2">{this.state.count}</span>
        </h3>
        <button
          type="button"
          class="btn btn-warning"
          onClick={this.incrementCount}
        >
          Add Count++
        </button>

        <table class="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">customer name</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  //execute when user click the button
  incrementCount = () => {
    this.setState({
      count: 10,
    });
  };
  // increment function
  // incrementCount = () => {
  //   this.setState({
  // count: this.state.count + 1
  // });
  // };
}
