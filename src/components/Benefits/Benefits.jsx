import React from 'react'
import './Benefits.scss'

const Benefits = () => {
  return (
    <>
      <div className='benefits-container'>
        <h5>Conditions</h5>
        <div className='benefits-container__conditions'>
          <div className="benefits-container__conditions__origin">
            <CloudyTitle/>
            <p className='text'>Houston - Las Vegas</p>
            <DetailConditions/>
          </div>
          <div className="benefits-container__conditions__destination">
            <CloudyTitle/>
            <p className='text'>Las Vegas - Los Angeles</p>
            <DetailConditions/>
          </div>
        </div>
        <h5>Price details</h5>
        <div className="benefits-container__price-details">
          <span><p>Adult basic fee</p><p>$150</p></span>
          <span><p>Tax</p><p>Included</p></span>
          <span><p>Regular total price</p><p>$150</p></span>
          <span className='save'><p>Save</p><p>-$1.5</p></span>
          <hr />
          <span><p>Total</p><p className='total'>$148.5</p></span>
        </div>
        <h5>Baggage price</h5>
        <div className="benefits-container__baggage-price">
          <span className='benefits-container__baggage-price__content'>
            <CloudyTitleBag/>
            <p className='text'>Houston - Las Vegas</p>
          </span>
          <span className='benefits-container__baggage-price__content'>
            <CloudyTitleBag/>
            <p className='text'>Las Vegas - Los Angeles</p>
          </span>
        </div>
      </div>
    </>
  )
}

const CloudyTitleBag = () => {
  return (
    <span>
      <span className='place'>
        <span><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698205222/Nube_ak9lon.svg"/></span>
        <p>Cloudy Airlanes</p>
      </span>
      <span><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698032516/Frameflecha_g9bi64.png"/></span>
    </span>
  )
}

const CloudyTitle = () => {
  return (
    <span>
      <span className='place'>
        <span><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698205222/Nube_ak9lon.svg"/></span>
        <p>Cloudy Airlanes</p>
      </span>
    </span>
  )
}

const DetailConditions = () => {
  return(
    <div>
      <span className='places__class'>
        <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698032516/Frameairplane_agazzk.png"/>
        <p className='places__class--economy'>Economy</p>
      </span>
      <span className='places__class'>
        <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698032516/Framedollar_h133bh.png"/>
        <p className='places__class--ref'>Refundable</p>
      </span>
      <span className='places__class'>
        <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698516221/Framecalendar_cfbol0.svg"/>
        <p className='places__class--ref'>Reschedule Available</p>
      </span>
    </div>
  )
}

export default Benefits