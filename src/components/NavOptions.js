
import React from 'react'
import { Link /* Route */ } from 'react-router-dom'


const NavOptions = () => {
    return (
        <article class="cf mw5 center">
            <div class="fl w-50 white tc">
                <Link to='/ContactForm' className="f5 grow link br3 pa1 ma1 ph3 pv2 mb2 dib white bg-dark-blue" >Contact Us</Link>                
            </div>
            <div class="fl w-50 bg-white tc">
                <Link to='/InitClock' className="f5 grow link br3 pa1 ma1 ph3 pv2 mb2 dib white bg-dark-blue" >Clock In/Out</Link>
            </div>
        </article>
                       
        
    );
        }

export default NavOptions;



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