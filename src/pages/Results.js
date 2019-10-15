import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/index.css';

class Results extends React.Component {
  render() {
    return (
      <div className={'top'}>
        <table className="table">
          <thead className="thead-dark">
          <tr>
            <th scope="col">Attribute</th>
            <th scope="col">Value</th>
            <th scope="col">Message</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </table>


      </div>
    );
  }
}

export default Results;