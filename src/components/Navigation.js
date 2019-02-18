import React from 'react';
import logo from './logo.png'
//import { Link } from 'react-router-dom'


const Navigation = () => {
return (
    <article className="mw5 center pt2">
        <div className="aspect-ratio aspect-ratio--7x5 mb2">
            <img src={logo} alt='logo' className="aspect-ratio--object cover"></img>
        </div>
    </article>
)
}

export default Navigation;