import React, { Component } from "react";
import Form from "../components/Form"
import Title from "../components/Title";

class Home extends Component {
    render() {
        return (
            <div>
                <Title />
                <Form />
            </div>
        )
    }
}

export default Home