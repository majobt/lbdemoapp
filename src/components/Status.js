import React, { Component } from "react";
import 'tachyons'
//import { Redirect } from 'react-router-dom'
/* Import Components */
//import Button from "./Button";

import ListItem from "./ListItem";
//import TextArea from "./TextArea";
//import {robots} from './robots';



class Status extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      contsNow: [],
      isLoading: false,
    };
    
  }

  componentDidMount() {
    console.log(this.state)
    this.setState({ isLoading: true });
    fetch('http://localhost:3002/today', {
      //mode: 'no-cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
      .then(response => response.json())
      .then(json => { this.setState({ contsNow: json, isLoading: false }) })
  }

render () {
  const { contsNow, isLoading } = this.state;

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  else {

    /* let data = contsNow.map(person => {
      return{console.log(person.firstname);
      console.log(person.id);}
    }); */

  return (
    <div>
        {
      contsNow.map((cont) => {
        return (
          <ListItem
            key={cont.id}
            id={cont.id}
            firstname={cont.firstname}
            lastname={cont.lastname}
            inout={cont.clocktype}
            note={cont.clocknote}
            timestamp={cont.date}

          />
        );
      })

    }
    </div>

     
  );

  }
}
}


export default Status;