import React, {Component} from 'react';
import Card from './Card';
//import { robots } from './robots';

/* const contractors = fetch(`https://landbelectrical.herokuapp.com/contractors`)
  .then(response => response.json())
  .then(data => this.state.contractors.push(data))
  .then(console.log("this state contractors:"))
  .then(console.log(this.state.contractors))
  .then(console.log(this.state.contractors[0])) */

class CardList extends Component {

  constructor(props) {
    super(props);

  this.state = {
      conts: [],
      isLoading: false,
    };
  }
  

componentDidMount() {
  console.log(this.state)
  this.setState({ isLoading: true });
  fetch("https://landbelectrical.herokuapp.com/contractors",
  {
    mode: 'cors',
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }})

      .then(response => response.json())
    .then(json => { this.setState({ conts: json, isLoading: false })})
     /*  if ((response.json()).isObject) {
        return response.json();
      } else {
        console.log(typeof response.json());
        console.log(Object.keys(response.json()));
        throw new Error('Something went wrong ...').console.log();
      } */
    
    //.then(data => this.setState({ conts: data.conts, isLoading: false }))
    //.catch(error => this.setState({ error, isLoading: false }));
    
    //.then(console.log(this.state.data.length()))
}


render () {
  const { conts, isLoading } = this.state;
  console.log('conts>>');
  console.log(conts);
  console.log('conts[0][0]>>');
  
  console.log('isLoading>>');
  console.log(isLoading)


  if (isLoading) {
    return <p>Loading ...</p>;
  }
  else{

    let data = conts.map(person => {
      console.log(person.firstname);
      console.log(person.id);
    });
 
    //conts.map(item => (console.log(item))
 // console.log(person1)

  return ( 
        <div>
      {
        conts.map((cont) => {
          return (
            <Card
              key={cont.id}
              id={cont.id}
              qrcode={cont.qrcode}
              firstname = {cont.firstname}
              lastname={cont.lastname}
              url={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://landbelectrical.herokuapp.com/ClockInOut/${cont.qrcode}`}
              
              />
          );
        })
        
      }
    </div>
    
  );
}
}
}
   
export default CardList; 