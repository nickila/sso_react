import React, { Component } from "react";
import "../index.css";

class Form extends Component {
  render() {
    return (
      <div className={'container'}>
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
              <button
                type="submit"
                className="btn btn-warning"
                onClick={this.handleFormSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;