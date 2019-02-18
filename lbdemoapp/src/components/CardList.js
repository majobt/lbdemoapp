import React, {Component} from 'react';
import Card from './Card';
//import { robots } from './robots';

/* const contractors = fetch(`http://localhost:3002/contractors`)
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
  fetch('http://localhost:3002/contractors',{
    //mode: 'no-cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
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

    var data = conts.map(person => {
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
              url={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=http://localhost:3000/ClockInOut/${cont.qrcode}`}
              
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