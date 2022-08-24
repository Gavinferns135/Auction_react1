import React from 'react'
// import "./index.css"
import "../App.css"

function Navbar() {
  return (
        <nav className="navbar p-4 navbar-expand-lg nav-bg text-white" style={{"flex" : "0 1 auto","backgroundColor":"#000000" }}>
            <div className="container nav-cont">

            <a className="navbar-br text-white" href="/#">Auctions</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mb-2 mb-lg-0">

                <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="/#">Home</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="/#">About</a>
                </li>

                <li className="nav-item">
                <a className="nav-link  text-white" aria-current="page" href="/#">Auctions</a>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="/#">Sell a Product</a>
                </li>

            </ul>
            </div>

            </div>
        </nav>
    
  )
}

export default Navbar