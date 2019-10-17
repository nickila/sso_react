import React, { Component } from "react";
import Form from "../components/Form"
import Title from "../components/Title";
import PracticeForm from "../components/PracticeForm";

class Home extends Component {
    render() {
        return (
            <div>
                <Title />
                {/*<Form />*/}
                <PracticeForm />
            </div>
        )
    }
}

export default Home