import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
<nav>
    <div className='navTexts'>
        <p>Nitro.</p>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/add'}><li>Add Page</li></Link>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </div>
</nav>
    </>
  )
}

export default Navbar