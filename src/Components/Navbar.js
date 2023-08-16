import React from 'react'
import '../Style/NavStyle.css'

const Navbar = () => {

  return (
    // <div className='container' style={{  background: 'green'}}>
      <nav className="navbar navbar-expand-lg" style={{marginLeft:'80px'}}>
        <a className=" logo navbar-brand" href="#"><h1 className='logo'>BRO.</h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="menu collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trainers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <button type="button" className="btn3 btn1-success3"><h6 style={{ fontSize: '10px' }}>Get Stareted</h6></button>
        </div>
      </nav>
    // </div>

  )
}

export default Navbar;