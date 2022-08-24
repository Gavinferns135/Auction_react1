import React from 'react'
import "../App.css"

function ProductRight() {
  return (
    <div className="col-md-2 rbox h-100 d-flex flex-column">
      <div className="box one" style={{"flex": "1 1 0%" ,"textAlign":"center"}}>
        <p>  Total Ongoing  </p>
        <p> 02</p>
      </div>

      {/* <div className="box two p-3" style={{" flex": "1 1 0%"}}>
        <p> Total bid Price </p> 
        <p> 220</p>
      </div> */}

      <div className="box two p-3  mt-5 mb-5" style={{"flex": "1 1 0%" , "textAlign":"center"}}>
        <p> % Total Bid Price </p>
        <p> 20</p>
      </div>
      
      <div className="box three p-3 " style={{"flex": "1 1 0%" ,"textAlign":"center"}}>
        <p> % Price Up </p>
        <p> 20</p>
      </div>
    </div>
  )
}

export default ProductRight