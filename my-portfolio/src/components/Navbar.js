import React from "react"
import {Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link className="links" to='/'>Home</Link>
                <Link className="links" to='/about-me'>About Me</Link>
                <Link className="links" to='/projects'>Projects</Link>
                <Link className="links" to='/contact'>Contact</Link>
            </nav>
        </div>
    )
}
