import React, { Component } from "react";
import 'tachyons'
import {Route, Redirect } from 'react-router-dom'
/* Import Components */

import Button from "./Button";
import TextArea from "./TextArea";
//import {robots} from './robots';



class ClockInOut extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            tryagain:false,
            Contractor: {
                name: '',
                id: '',
                active: '',
                qrcodeused: this.props.match.params.qrcode,
                clocktype: '',
                clocknote: '',
                ipaddress: '',
                cookie: ''
            },
            complete: false
        };

        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClockIn = this.handleClockIn.bind(this);
        this.handleClockOut = this.handleClockOut.bind(this);
        // this.handleClearForm = this.handleClearForm.bind(this);
    }
    
        
    componentDidMount() {
        fetch(`http://localhost:3002/ClockInOut/${this.props.match.params.qrcode}`)
            .then(response => response.json())      
            .then(data => {this.setState({
                Contractor: {
                name: `${data[0].firstname}  ${data[0].lastname}`,
                id: data[0].id,
                //name: Contractor[0].name,
                active: data[0].active,
                qrcodeused: this.props.match.params.qrcode,
                clocktype: '',
                clocknote: '',
                ipaddress: '',
                cookie: ''
            }})})
            .then(console.log("hello" + this.state));
    }

 
    handleTextArea(e) {
        let value = e.target.value;
        this.setState(Object.assign(this.state.Contractor, {
            clocknote: value 
        }))
        console.log(this.state.clocknote); 
                }

    handleClockIn(e) {
        e.preventDefault();
        console.log("Clock In")
        let value2 = "in"
        //let value2 = value.target.value;
        //console.log('logged as' + value2);
        this.setState(Object.assign(this.state.Contractor, {
            clocktype: value2
        }))
        
        console.log(this.state.id);
        console.log(this.state.name);
        console.log(this.state.active);
        console.log(this.state.qrcodeused);
        console.log(this.state.clocknote);
        console.log(this.state.clocktype);
        this.handleFormSubmit()
            }

    handleClockOut(e) {
        e.preventDefault();
        console.log("Clock Out")
        //let value2 = value.target.value;
        //console.log('logged as' + value2);
        this.setState(Object.assign(this.state.Contractor, {
            clocktype: 'out'
        }))
        console.log('id : ' + this.state.id +',');
        console.log('name : ' + this.state.name + ',');
        console.log('active : ' + this.state.active + ',');
        console.log('qrcodeused : ' + this.state.qrcodeused + ',');
        console.log('clocknote : ' + this.state.clocknote + ',');
        console.log('clocktype : ' + this.state.clocktype);
        this.handleFormSubmit()
                    }

    handleFormSubmit() {
        let clockEvent = this.state;
        fetch(`http://localhost:3002/ClockInOut/${this.props.match.params.qrcode}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clockEvent)})
            .then(response => {
                if (response.ok) {
                    return response.json()
                        .then(this.setState({ complete: true }))
                                
                } else {
                    window.alert("Error clocking in! Please try again...");
                    throw new Error('Something went wrong ...');
                }
            })
            
                 
    } 

    /* handleClearForm(e) {
        e.preventDefault();
        this.setState({
            name: "",
            age: "",
            gender: "",
            skills: [],
            about: ""
        });
    }  */

    render() {
        console.log(this.state.params);
        console.log(this.state.id);
        console.log(this.state.name);
        console.log(this.state.active);
        console.log(this.state.qrcodeused);
        console.log(this.state.clocknote);
        console.log(this.state.clocktype);

        if (this.state.complete) {
            console.log(`Done`)
            return <Redirect to={`/today/` + this.state.Contractor.id} />
                
        } else {

        return (


            <form className="container-fluid" onSubmit={this.handleFormSubmit} >
                <article className="mw5 center br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div class="tc">
                        <h1 className= "mw5 f4 dark-gray ma1">Name: {this.state.Contractor.name}</h1>
                        <h2 className="mw5 f7 fw4 gray ma2">{`ID: ${this.state.Contractor.qrcodeused}/${this.state.Contractor.id}`} </h2>
                 <TextArea
                    title={"Optional note:"}
                    titlestyle={"mw f6 pa2 ma2 dark-gray"}
                    rows={2}
                    value={this.state.clocknote}
                    name={"clocknote"}
                    handleChange={this.handleTextArea}
                    placeholder={"Optional Note"}
                />
                {/* About you */}
                 <Button
                    className="b ph3 pv2 input-reset ba b--gray bg-transparent grow pointer f6"
                    action={this.handleClockIn}
                    type={"mw5 f5 br3 pa2 ma1 ph3 mb2 dib white bg-green"}
                    title={"Clock In"}
                    name={"in"}
                    value="in"
                    clocktype={'in'}
                    id='in'
                />{" "} 
                {/*Submit */}
                 <Button
                    action={this.handleClockOut}
                            type={"mw5 f5 br3 pa2 ma1 ph3 mb2 dib white bg-red"}
                    title={"Clock Out"}
                    name={"out"}
                    value={'out'}
                    clocktype={'out'}
                    id='out'
                />{" "}
                {/* Clear the form */} 
                    </div>
                </article>
            </form>
        );
    }
}
}



export default ClockInOut;


