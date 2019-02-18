import React, { Component } from "react";
import 'tachyons'
import { Redirect } from 'react-router-dom'
/* Import Components */
import Input from "./Input";
import Button from "./Button";


class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: {
                qrcode: "",
                toClock: false
            },

        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* This lifecycle hook gets executed when the component mounts */

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                code: {
                    ...prevState.code,
                    [name]: value
                }
            }),
            () => console.log("input " + this.state.code)
        );
    }



    handleFormSubmit(e) {
        e.preventDefault();
        let qrcode = this.state.code;
        console.log(qrcode.qrcode);
        console.log(this.state.code.qrcode);
        fetch(`http://localhost:3002/ClockInOut/${this.state.code.qrcode}`)
            .then(response => response.json())
            .then(console.log)
        this.setState({
           toClock: true
        }
    
        )}

    

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            code: {
                qrcode: ""
            }
        });
    }

    render() {
        if (this.state.toClock === true) {
             console.log(`Submitted qrcode:` + this.state.code.qrcode)
            return <Redirect to={`/ClockInOut/`+this.state.code.qrcode} />
        }
               
        return (
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div class="tc">
                <Input
                    inputType={"text"}
                    title={"QR code"}
                    name={"qrcode"}
                    value={this.state.code.name}
                    placeholder={"Enter an active qrcode"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Name of the user */}


                <Button
                    action={this.handleFormSubmit}
                    type={"mw5 f5 grow link br3 pa1 ma1 ph3 pv2 mb2 dib white bg-blue"}
                    title={"Submit"}
                    
    
                />{" "}
                {/*Submit */}
                
                            </div>
                    </article>
            </form>
        );
    }
}


export default FormContainer;