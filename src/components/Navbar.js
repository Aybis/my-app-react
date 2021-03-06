
import React from 'react'
import logo from '../logo.svg';

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark  sticky-top bg-white shadow-sm">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2 navbar-brand mr-3" href="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="py-2 nav-link active text-dark" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="py-2 nav-link text-dark" href="/">Me</a>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
);

export default Navbar;