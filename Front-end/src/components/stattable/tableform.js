import React from "react";

//Array, name is a table name, type is a type table
export default function Tableform({ name, array, type }) {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6
            style={{ float: "left", width: "40%" }}
            className="m-0 font-weight-bold text-primary"
          >
            {name}
          </h6>
          <span style={{ float: "left", width: "60%", textAlign: "right" }}>
            <span style={{ marginRight: "10px" }}>Start</span>
            <input
              id="start"
              style={{ marginRight: "20px" }}
              type="date"
            ></input>
            <span style={{ marginRight: "10px" }}>End</span>
            <input id="end" style={{ marginRight: "20px" }} type="date"></input>
          </span>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>ID Product</th>
                  <th>Name</th>
                  <th>Total Quantity</th>
                  <th>Total Money</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>3</td>
                  <td>Gucci Kids Vintage Logo Printed T-Shirt</td>
                  <td>13</td>
                  <td>890000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Gucci Interlocking G Patch Trousers</td>
                  <td>6</td>
                  <td>650000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}