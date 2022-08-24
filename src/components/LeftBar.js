import React from 'react'
import "../App.css"

function LeftBar({headclick,clicked,button1,setButton1,button2,setButton2,button3,setButton3,button4,setButton4,exit,setExit,create,setCreate})
{

  
const onButtonClick1 = (mode) =>{
    setButton1(mode => !mode);setButton2(0);setButton3(0);setButton4(0);setExit(0);setCreate(0);
}
const onButtonClick2 = (mode) =>{
  setButton2(mode => !mode);setButton1(0);setButton3(0);setButton4(0);setExit(0);setCreate(0);
}
const onButtonClick3 = (mode) =>{
  setButton3(mode => !mode) ;setButton1(0);setButton2(0);setButton4(0);setExit(0);setCreate(0);
}
const onButtonClick4 = (mode) =>{
  setButton4(mode => !mode) ; setButton3(0) ;setButton2(0); setButton1(0); setExit(0);setCreate(0);
}
const onButtonClickexit = (mode) =>{
  setExit(mode=>!mode) ; setButton3(0) ;setButton2(0); setButton1(0) ; setButton4(0); setCreate(0);
}
const onButtonClickCreate = (mode) =>{
  setCreate(mode => !mode) ;  setButton3(0) ;setButton2(0); setButton1(0) ; setButton4(0) ;setExit(0) ;
}

  if(headclick)
  {
     
    return (
      <div className="l-navbar show" id="nav-bar" style={{"height" : "91vh","backgroundColor":"#000000"}}>
      <nav className ="navs" style={{"backgroundColor":"black"}}>
        <div>
  
  
          <div className ="nav_list">
  
          
  
            <a href="/#"  id='button1' className ={button1 ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClick1(1)} >
              <i className ='fa-solid fa-play nav_icon'></i>
              <span className ="nav_name text-white">Ongoing</span>
            </a>
  
            <a  href="/#" className ={button2 ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClick2(1)}>
              <i className ='fa-solid fa-circle-xmark nav_icon'></i>
              <span className ="nav_name text-white">Cancelled</span>
            </a>
  
            <a  href="/#" className ={button3 ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClick3(1)}>
              <i className ='fa-solid fa-hourglass-half nav_icon'></i>
              <span className ="nav_name text-white">End</span>
            </a>
  
            <a  href="/#" className ={button4 ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClick4(1)}>
              <i className ='fa-solid fa-bag-shopping nav_icon'></i>
              <span className ="nav_name text-white">Sold</span>
            </a>
  
  
            <div className ={create ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClickCreate(1)}>
            <div id="createbtn" className={clicked ? 'createbtn' : 'none'}>
              <a  className =" nav_logo w-100" href="/#">
                <i className ='fa-solid fa-circle-plus  nav_logo-icon'></i>
                <span className ="nav_logo-name text-white">Create Now</span>
              </a>
            </div>
            </div>
  
          </div>
  
        </div>
  
        <a href="/#" className ={exit ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClickexit(1)}>
          <i className ='bx bx-log-out nav_icon'></i>
          <span className ="nav_name text-white">SignOut</span>
        </a>
  
      </nav>
    </div>
    )
  }
  return (
    <div className ="l-navbar" id="nav-bar" style={{"height" : "91vh"}}>
    <nav className ="navs" style={{"backgroundColor":"black"}}>
      <div>


        <div className ="nav_list">

        

          <a href="/#" className ={button1 ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClick1(1)}>
            <i className ='fa-solid fa-play nav_icon'></i>
            <span className ="nav_name ">Ongoing</span>
          </a>

          <a  href="/#" className ={button2 ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClick2(1)}>
            <i className ='fa-solid fa-circle-xmark nav_icon'></i>
            <span className ="nav_name ">Cancelled</span>
          </a>

          <a  href="/#" className ={button3 ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClick3(1)}>
            <i className ='fa-solid fa-hourglass-half nav_icon'></i>
            <span className ="nav_name">End</span>
          </a>

          <a  href="/#" className ={button4 ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClick4(1)}>
            <i className ='fa-solid fa-bag-shopping nav_icon'></i>
            <span className ="nav_name">Sold</span>
          </a>


            <div className ={create ? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClickCreate(1)}>
            <div id="createbtn" className={clicked ? 'createbtn' : 'none'}>
              <a  className =" nav_logo w-100" href="/#">
                <i className ='fa-solid fa-circle-plus  nav_logo-icon'></i>
                <span className ="nav_logo-name">Create Now</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      <a href="/#" className ={exit? "nav_link w-100 active" : "nav_link w-100"} onClick={() => onButtonClickexit(1)}>
        <i className ='bx bx-log-out nav_icon'></i>
        <span className ="nav_name">SignOut</span>
      </a>

    </nav>
  </div>
  )
}

export default LeftBar