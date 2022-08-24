import React from 'react'
import "../App.css"

function ProductTop({setClicked}) {

    const onButtonClick = (mode) => {
      setClicked(mode)
        // console.log(mode)
        
    }
  return (
    <>
    <div className="col-9 d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex align-items-center text-white">
        <p> <span className=" txt hi"> Welcome , </span>  <span className="txt user">Harsh</span></p>
        <div className="btns">
          <div className="wrapper">
            <input type="radio" name="select" id="option-1" value="owner" onClick={() => onButtonClick(1)}/>
            <input type="radio" name="select" id="option-2" value="bidder" defaultChecked  onClick={() => onButtonClick(0)}/>
            <label htmlFor="option-1" className="option option-1">
              
              <span>Owner</span>
            </label>
            <label htmlFor="option-2" className="option option-2">
              
              <span>Bidder</span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-bell fa-xl "></i>
        
      </div>

    </div>

    <div className="col-2 d-flex align-items-center justify-content-end">
      <div className="usersinfo d-flex align-items-center flex-row">
        <div className="usertext  d-flex flex-column">
          <p className="username">Harsh Waychal</p>
          <p className="asowner">As Auction Owner</p>
        </div>

        <div className="imgsection  ">
          <img src="https://cutewallpaper.org/24/young-man-pictures/300000-42579-best-5e126-young-1b0c9-man-d0573-photos-ba7be-%C2%B7-318fa-100-4251e-free-d8ca6-download---%C2%B7---pexels---stock---photos.jpeg" className="userimg" />
        </div>

      </div>
    </div>
  
  </>
  )
}

export default ProductTop