
import React from 'react'
import { Link /* Route */ } from 'react-router-dom'

const handleUpdateCodes = () => {
     fetch(`http://localhost:3002/UpdateCodes`)
        .then(response => response.json())
        .then(console.log)
}

const Admin = () => {

    return (
        <article class="cf mw5 center">
            <div class="fl w-50 white tc">
                <Link to='/Contractors' onClick={handleUpdateCodes} className="f5 grow link br3 pa1 ma1 ph3 pv2 mb2 dib white light-blue" >Generate New QR Codes</Link>                
            </div>
            <div class="fl w-50 bg-white tc">
                <Link to='/InitClock' className="f5 grow link br3 pa1 ma1 ph3 pv2 mb2 dib white light-gray" >Add users</Link>
            </div>
            <div class="fl w-50 bg-white tc">
                <Link to='/InitClock' className="f5 grow link br3 pa1 ma1 ph3 pv2 mb2 dib white light-gray" >Update Users</Link>
            </div>
        </article>
                       
        
    );
        }

export default Admin;



// The Header creates links that can be used to navigate
// between routes.
/* const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header */