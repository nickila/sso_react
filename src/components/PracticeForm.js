import React, { Component } from "react";
import "../index.css";
import API from "../utils/API";

class PracticeForm extends Component {
    state = {
        userName: "",
        number: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.userName)
        console.log(this.state.number)
        API.addStuff({
            userName: this.state.userName,
            number: this.state.number
        })
    }



  render() {
    return (
        <div>
            <form className={"small-form mx-auto"}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="userName"
                        placeholder="name"
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select
                        className="form-control"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                    >
                        <option value="one">one</option>
                        <option value="two">two</option>
                        <option value="three">three</option>
                        <option value="four">four</option>
                        <option value="five">five</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="btn btn-warning mb-2"
                    onClick={this.handleFormSubmit}
                >
                    Confirm identity
                </button>

            </form>
        </div>
    );
  }
}

export default PracticeForm;