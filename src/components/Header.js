import React from 'react'
import "../App.css"

function Header({setHeadClicked})
{
  const onButtonClick = (mode) =>{
      setHeadClicked(mode => !mode)
      console.log("sdasdasd"+mode)
  }

  return (
    
    <div>
        <header className="header" id="header" style={{"flex": "0 1 auto"}}>
        <div className="header_toggle">
        <i className='bx bx-menu' id="header-toggle" onClick={() => onButtonClick(1)} ></i>
        </div>
        </header>
    </div>
  )
}

export default Header