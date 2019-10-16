import React from "react";
import "../index.css";

class Table extends React.Component {
  render() {
    return (
      <div className={'container'}>
          <div className={"row"}>
            <table className="table borderless results-table col-9 mx-auto">
              <thead>
              <tr>
                <th scope="col">Attribute</th>
                <th scope="col">Value</th>
                <th scope="col">Message</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>FirstName</td>
                <td>Samwell</td>
                <td></td>
              </tr>
              <tr>
                <td>LastName</td>
                <td>Tarly</td>
                <td></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><span className={"error-red"}>bigsammyt@hotmail.biz</span></td>
                <td><span className={"error-red"}>Email 'bigsammyt@hotmail.biz' does not match user</span></td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default Table;