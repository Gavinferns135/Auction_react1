import React from 'react'
import "../App.css"
function Products(props) {
  return (
    
   


              <>

                <div className="row d-flex justify-content-between p-2 one-card m-3">
                  <div className="col-6 p-0 d-flex">
                    <div className="prodimgsection">
                      <img src={props.img} className="prod-img" alt=""/>
                    </div>

                    <div className="proddata d-flex flex-column">
                      <p className="brand-name">{props.name}</p>
                      <p className="model">{props.model}</p>

                      <div className="d-flex">
                        <i className="fa-solid fa-key"></i>
                        <p className="ptxt">{props.hash}</p>
                        <i className="fa-solid fa-user-group"></i>
                        <p className="ptxt">{props.viewers}</p>
                      </div>
                    </div>

                  </div>
                  
                  <div className="col-3 highest-bid my-auto text-center h-100">

                    <p className="pt">{props.price}ETH</p>

                  </div>
                  <div className="col-3 time my-auto text-center h-100">

                    <p className="pt">{props.time}</p>

                  </div>

                </div>
                {/* <div className="row d-flex justify-content-between p-2 one-card m-3" >
                  <div className="col-6 p-0 d-flex">
                    <div className="prodimgsection">
                      <img src="./back.png" className="prod-img"/>
                    </div>

                    <div className="proddata d-flex flex-column">
                      <p className="brand-name">BMW</p>
                      <p className="model">M4 Competition X kith</p>

                      <div className="d-flex">
                        <i className="fa-solid fa-key"></i>
                        <p className="ptxt">0x23bhjbbmn</p>
                        <i className="fa-solid fa-user-group"></i>
                        <p className="ptxt">58</p>
                      </div>
                    </div>

                  </div>
                  
                  <div className="col-3 highest-bid my-auto text-center h-100">

                    <p className="pt">202 ETH</p>

                  </div>
                  <div className="col-3 time my-auto text-center h-100">

                    <p className="pt">08:24:00</p>

                  </div>

                </div>
                <div className="row d-flex justify-content-between p-2 one-card m-3" >
                  <div className="col-6 p-0 d-flex">
                    <div className="prodimgsection">
                      <img src="./back.png" className="prod-img"/>
                    </div>

                    <div className="proddata d-flex flex-column">
                      <p className="brand-name">BMW</p>
                      <p className="model">M4 Competition X kith</p>

                      <div className="d-flex">
                        <i className="fa-solid fa-key"></i>
                        <p className="ptxt">0x23bhjbbmn</p>
                        <i className="fa-solid fa-user-group"></i>
                        <p className="ptxt">58</p>
                      </div>
                    </div>

                  </div>
                  
                  <div className="col-3 highest-bid my-auto text-center h-100">

                    <p className="pt">202 ETH</p>

                  </div>
                  <div className="col-3 time my-auto text-center h-100">

                    <p className="pt">08:24:00</p>

                  </div>

                </div>
                <div className="row d-flex justify-content-between p-2 one-card m-3" >
                  <div className="col-6 p-0 d-flex">
                    <div className="prodimgsection">
                      <img src="./back.png" className="prod-img"/>
                    </div>

                    <div className="proddata d-flex flex-column">
                      <p className="brand-name">BMW</p>
                      <p className="model">M4 Competition X kith</p>

                      <div className="d-flex">
                        <i className="fa-solid fa-key"></i>
                        <p className="ptxt">0x23bhjbbmn</p>
                        <i className="fa-solid fa-user-group"></i>
                        <p className="ptxt">58</p>
                      </div>
                    </div>

                  </div>
                  
                  <div className="col-3 highest-bid my-auto text-center h-100">

                    <p className="pt">202 ETH</p>

                  </div>
                  <div className="col-3 time my-auto text-center h-100">

                    <p className="pt">08:24:00</p>

                  </div>

                </div>
                <div className="row d-flex justify-content-between p-2 one-card m-3" >
                  <div className="col-6 p-0 d-flex">
                    <div className="prodimgsection">
                      <img src="./back.png" className="prod-img"/>
                    </div>

                    <div className="proddata d-flex flex-column">
                      <p className="brand-name">BMW</p>
                      <p className="model">M4 Competition X kith</p>

                      <div className="d-flex">
                        <i className="fa-solid fa-key"></i>
                        <p className="ptxt">0x23bhjbbmn</p>
                        <i className="fa-solid fa-user-group"></i>
                        <p className="ptxt">58</p>
                      </div>
                    </div>

                  </div>
                  
                  <div className="col-3 highest-bid my-auto text-center h-100">

                    <p className="pt">202 ETH</p>

                  </div>
                  <div className="col-3 time my-auto text-center h-100">

                    <p className="pt">08:24:00</p>

                  </div>

                </div>
                <div className="row d-flex justify-content-between p-2 one-card m-3" >
                  <div className="col-6 p-0 d-flex">
                    <div className="prodimgsection">
                      <img src="./back.png" className="prod-img"/>
                    </div>

                    <div className="proddata d-flex flex-column">
                      <p className="brand-name">BMW</p>
                      <p className="model">M4 Competition X kith</p>

                      <div className="d-flex">
                        <i className="fa-solid fa-key"></i>
                        <p className="ptxt">0x23bhjbbmn</p>
                        <i className="fa-solid fa-user-group"></i>
                        <p className="ptxt">58</p>
                      </div>
                    </div>

                  </div>
                  
                  <div className="col-3 highest-bid my-auto text-center h-100">

                    <p className="pt">202 ETH</p>

                  </div>
                  <div className="col-3 time my-auto text-center h-100">

                    <p className="pt">08:24:00</p>

                  </div>

                </div> */}
                
            
              </>

  )
}

export default Products