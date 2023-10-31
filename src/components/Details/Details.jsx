import React from 'react'
import './Details.scss'

const Details = () => {
  return (
    <>
    <div className="details-container">
      <section className="details-container__section">
        <div className="details-container__section__hours">
          <h5>23:15</h5>
          <p>2h10"</p>
          <h5>1:25</h5>
        </div>
        <div className="details-container__section__line">
          <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698026638/Bar_srmh7y.png" alt="" />
        </div>
      </section>
      <article className="details-container__article">
        <div className="details-container__article__origin">
          <h3>Houston (HOU)</h3>
          <p>George Bush Intercontinental Airport, Houston</p>
        </div>
        <div className="details-container__article__flight-detail">
          <div className='details-container__article__flight-detail--ticket'>
            <span>
              <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990522/Booking-Flight-Sprint/jaz3y6fjecbg7yeifz1p.svg" alt="" />
              CA-6018 • Economy
            </span>
            <div>
              <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990523/Booking-Flight-Sprint/xjartctrkacm9jmvxfc2.svg" alt="" />
              <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990523/Booking-Flight-Sprint/a5otbznzruuka3j6vfpj.svg" alt="" />
              <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990523/Booking-Flight-Sprint/vwiwnc7hgjud758k8ms9.svg" alt="" />
            </div>
          </div>
          <div className="details-container__article__flight-detail__content">
            <div>
              <div className="details-container__article__flight-detail__content--item">
                <span>
                  <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990522/Booking-Flight-Sprint/x6ubqvcvo7pt1u8r99vk.svg" alt="" />
                  Baggage • 
                </span>
                <p>2 x 23 kg</p>
              </div>
              <div className="details-container__article__flight-detail__content--item">
                <span className='cabin'>Cabin Baggage </span>
                <span className='point'>•</span>
                <p>1 x 7 kg</p>
              </div>
            </div>
            <div className="details-container__article__flight-detail__content--itemAir">
              <div className='airbus'>
                <span>
                  <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990522/Booking-Flight-Sprint/x6ubqvcvo7pt1u8r99vk.svg" alt="" />
                  Airbus •
                </span>
                <p>A320</p>
              </div>
              <p>3-3 seat layout</p>
              <p>29 inches Seat pitch (standard)</p>
            </div>
          </div>
        </div>
        <div className="details-container__article__destination">
          <h3>Las Vegas (LAS)</h3>
          <p>McCarran International Airport, Las Vegas</p>
        </div>
      </article>
    </div>
    <StopBanner/>
    </>
  )
}

const StopBanner = () => {
  return (
    <div className="stop-container">
      <div className="stop-container__left-section">
        <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990523/Booking-Flight-Sprint/tccmbvev7qbveceywdqt.png" alt="" />
        <p>Stop to chage planes in <b>Las Vegas</b></p>
      </div>
      <b>22:55</b>
    </div>
  )
}

export default Details