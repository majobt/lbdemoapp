import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavOptions from './NavOptions';
import InitClock from './InitClock';
import ContactForm from './ContactForm';
import ClockInOut from './ClockInOut';
import Status from './Status';
import CardList from './CardList';
import IndivStatus from './IndivStatus';
import Admin from './Admin';
//import Card from './Card'; 







// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

function Main() {
    return (
        <main>
            <Switch>
                <Route path exact="/" component={NavOptions} />
                <Route path ="/ContactForm" component={ContactForm} />
                <Route path ="/InitClock" component={InitClock} />
                <Route path="/ClockInOut/:qrcode" component={ClockInOut} />
                <Route path="/today" component={Status} />
                <Route path="/contractors" component={CardList} />
                <Route path="/today/:id" component={IndivStatus} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </main>
    );
}

/* const Main = () => (
    <div> 
        <Switch>
            
        </Switch>
    
        
    </div>
    )

 */
export default Main


    
   /*  <Main>
        <NavOptions/>
        <NavOptions />
        <ContactForm />



    </Main>
    
         */
        
        

    /* <div>
          <NavOptions />
          <ContactForm />
          <InitClock />
          
          <Card />
          </div> */