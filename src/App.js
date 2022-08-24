import React from 'react'
import Navbar from './components/Navbar'
import LeftBar from './components/LeftBar'
import Header from './components/Header'
import Products from './components/Products'
import ProductRight from './components/ProductRight'
import "./App.css"
import ProductTop from './components/ProductTop'
import { useState } from 'react'

function App() {
 

  const [clicked,setClicked] = useState(0);
  const [headclick,setHeadClicked] = useState(0);
  const [button1,setButton1]=useState(0);
  const [button2,setButton2]=useState(0);
  const [button3,setButton3]=useState(0);
  const [button4,setButton4]=useState(0);
  const [exit,setExit]=useState(0);
  const [create,setCreate]=useState(0);
  return (
    <div id="dash-body" className="dash-body">
      <Navbar/>
        <section id="body-pd" className="body-pd" style={{"flex" : "1 1 auto"}}>
            <LeftBar
             clicked={clicked} 
             headclick={headclick} 
             button1={button1} 
             setButton1={setButton1}
             button2={button2} 
             setButton2={setButton2}
             button3={button3} 
             setButton3={setButton3}
             button4={button4} 
             setButton4={setButton4}
             exit={exit}
             setExit={setExit}
             create={create}
             setCreate={setCreate}
             />
            <div className="r p-3 pl-5 d-flex flex-column" style={{"backgroundColor":"#202020"}}>
                    <Header setHeadClicked={setHeadClicked}/>
                      <div className="container main-content d-flex flex-column" style={{"flex" : "1 1 auto"}}>
                            <div className="row d-flex justify-content-around w-100 user-content mb-4" style={{"flex" : "0 1 auto"}}>
                              <ProductTop setClicked ={setClicked}/>
                            </div>
                            <div className="row d-flex justify-content-around h-100 " style={{"flex": "1 1 auto"}}>
                              <div className="col-md-9 cont p-5 card-sect">
                              <div className="leftcardsheads mb-4">
                                <div className="row">
                                  <div className="col-6 text-center">
                                    <p className="titles ">Product</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <p className="titles">Highest Bid</p>
                                  </div>
                                  <div className="col-3 text-center">
                                    <p className="titles">Time Left</p>
                                  </div>
                                </div>
                              </div>
                              <div className="leftcards">
                              <Products
                                  img="https://i.ytimg.com/vi/nLYIBXbKysw/maxresdefault.jpg"
                                  name="BMW"
                                  model="M4 Competition X kith"
                                  hash="0x23bhjbbmn"
                                  viewers="58"
                                  price="202"
                                  time="08:24:00"
                              />
                              <Products
                                  img="https://i.ytimg.com/vi/nLYIBXbKysw/maxresdefault.jpg"
                                  name="BMW"
                                  model="M4 Competition X kith"
                                  hash="0x23bhjbbmn"
                                  viewers="58"
                                  price="202"
                                  time="08:24:00"
                              />
                              <Products
                                  img="https://i.ytimg.com/vi/nLYIBXbKysw/maxresdefault.jpg"
                                  name="BMW"
                                  model="M4 Competition X kith"
                                  hash="0x23bhjbbmn"
                                  viewers="58"
                                  price="202"
                                  time="08:24:00"
                              />
                                
                                </div>
                              </div>
                                
                                <ProductRight/>
                            </div>
                      </div>
            </div>
        </section>
      </div>

  )
}

export default App
