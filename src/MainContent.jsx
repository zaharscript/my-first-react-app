import React, { Component } from "react";

export default class MainComponent extends Component {
  state = {
    pageTitle: "Customers",
    count: 0,
    customers: [
      {
        id: 1,
        name: "Zahra",
        Country: "Malaysia",
        Phone: "123-234",
        address: { city: "Kajang" },
      },
      {
        id: 2,
        name: "Annas",
        country: "German",
        Phone: "143-254",
        address: { city: "Ipoh" },
      },
      {
        id: 3,
        name: "Baihaqi",
        country: "United Kingdom",
        Phone: "363-876",
        address: { city: "Bertam" },
      },
      {
        id: 4,
        name: "Hadi",
        country: "Indonesia",
        Phone: "122-267",
        address: { city: "Bayan lepas" },
      },
      {
        id: 5,
        name: "Muhaimin",
        country: "Australia",
        Phone: "101-839",
        address: { city: "Johor Baharu" },
      },
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
          className="btn btn-warning"
          onClick={this.incrementCount}
        >
          Add Count++
        </button>

        <table className="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">customer name</th>
              <th scope="col">Country</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => {
              return (
                <tr key="{customer.id}">
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.country}</td>
                  <td>{customer.Phone}</td>
                  <td>{customer.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  //execute when user click the button
  // incrementCount = () => {
  //   this.setState({
  //     count: 10,
  //   });
  // };

  // increment function
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}
