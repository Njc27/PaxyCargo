import React from 'react'
import Nav from './Nav.js'

const header = () => {
  return (
    <>
    <div className='background-vid'>
        <video src='https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/Imex-Cargo-Website1.mp4' autoPlay loop muted/>
</div>
    <header>

    <Nav />
    <div class = "banner">
      <div class = "container">
        <form>
          <input type = "text" class = "search-input" placeholder="Search here. . ."></input>
          <button type = "submit" class = "search-btn">
            <i class = "fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
    </header>
    </>
  )
}

export default header
