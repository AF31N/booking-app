import React, { useState } from 'react'
import './Hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'



const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [{
    src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1'
  },
  {
    src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985858.jpg?k=9d07336797a8e03c62832e9666892de67abb124f53e10c1ceee1fc4a61083bb6&o=&hp=1'
  },{
    src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985859.jpg?k=57573f2d62c70fff26480b81e074b7e1708153d365a31d7b6298f02c3a39e525&o=&hp=1'
  },{
    src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125863.jpg?k=f21d5d96d4efa1694138db9c64f1c27879af4ba5f1a2fc68a6f38f760cef4007&o=&hp=1'
  },{
    src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/351072016.jpg?k=285441458d495d3c3cd30a7eeb934ab87eadceff9f2843523903c8ccf44b4616&o=&hp=1'
  },{
    src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336583079.jpg?k=1f649baaffed9f59d2ca80809a6e6d53363967e8e0639749ec30551359b24c64&o=&hp=1'
  },
]

const handleOpen = (i) => {
  setSlideNumber(i);
  setOpen(true)
    
}

const handleMove = (direction) => {
  let newSlideNumber;
  if(direction==='l'){
    newSlideNumber = slideNumber === 0? 5 : slideNumber-1
  }else{
    newSlideNumber = slideNumber === 5? 0 : slideNumber+1
  }
  setSlideNumber(newSlideNumber);

}
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
       {open && <div className="slider">
               <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
               <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')}/>
               <div className="sliderWrapper">
                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
               </div>
               <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('r')}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton st 125 New york</span>
            <span className="hotelDistance">Excellent location - 500m from center</span>
            <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free taxi service</span>
            <div className="hotelImages">
              {
                photos.map((image,i)=>(
                  <div key={i} className="hotelImgWrapper">
                 <img onClick={()=>handleOpen(i)} src={image.src} alt="" className='hotelImg'/>
                 </div>
                ))
              }
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                <p className="hotelDesc">
                 Aparthotel Stare Miasto is situated in the very centre of Kraków’s Old Town, just 120 metres from the Main Market Square. It features spacious modern apartments with free WiFi.
                 Located in a historic building, Aparthotel Stare Miasto features a unique interior design in the warm colour of bricks with wooden elements.
                 All apartments at Aparthotel Stare Miasto are air-conditioned, fitted with an LCD TV and a fully-equipped kitchenette, including a refrigerator and an electric kettle. The 24-hour front desk offers ticket and tour services.
              </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay</h1>
                <span>Located in real heart of Krakow, this property has an excellent location score of 9.8</span>
                <h2>
                  <b>$945</b>(9-nights)
                </h2>
                <button>Reserve or Book Now</button>
              </div>
            </div>
          </div>
          <div className="mailList">
          <MailList/>
          </div>
          <Footer/>

        </div>
      </div>
    </div>
  )
}

export default Hotel
