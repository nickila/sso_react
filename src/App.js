import React from "react";
import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <h1 className='display-1 title'>UPLOAD SAML TRACE</h1>
        <form>
          <div className="form-row">
            <div className="col-7">
              <div className="input-group mb-3 field">
                <div className="input-group-prepend">
                  <span className="input-group-text">Upload</span>
                </div>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="inputGroupFile01" />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose XML file</label>
                </div>
              </div>
            </div>
            <div className="col-3 field">
              <select
                name="userIDP"
                className="form-control"
                // value={this.state.fields["userIDP"]}
                // onChange={this.handleChange.bind(this, "userIDP")}
              >
                <option className={"grey-text"}>Select IDP...</option>
                <option value="SecureAuth">SecureAuth</option>
                <option value="AD FS">AD FS</option>
                <option value="PingFederate">PingFederate</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={"col field"}>
            {/*<fieldset>*/}
              <button
                type="submit"
                className="btn btn-warning"
                onClick={this.handleFormSubmit}
              >
                SUBMIT
              </button>
            {/*</fieldset>*/}
            </div>
          </div>
          <div className={"row"}>
            <table className="table borderless results-table col-10 mx-auto">
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
        </form>
      </div>
    );
  }
}

export default Home;