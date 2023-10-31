
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Offcanvas.scss';
import Details from '../Details/Details';
import Benefits from '../Benefits/Benefits';

const MyStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps =  [
    [
      'Fight Details', 
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990522/Booking-Flight-Sprint/qbc8rdyieuhpi8cuzxna.svg",
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1698034102/Framegreyinfo_z5mnwx.svg"
    ], 
    [
      'Benefits',
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1698032516/Frameheart_ntwtor.png",
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990521/Booking-Flight-Sprint/jhb9zda821cybwfgi3ii.svg"
    ], 
    [
      'Refund',
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990521/Booking-Flight-Sprint/zkosvg594lufcmr63bex.svg",
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990521/Booking-Flight-Sprint/zkosvg594lufcmr63bex.svg"
    ], 
    [
      'Reschedule',
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990522/Booking-Flight-Sprint/hhlt6c4sn0tzdbyg260n.svg",
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990522/Booking-Flight-Sprint/hhlt6c4sn0tzdbyg260n.svg"
    ]
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div id="stepper" className="bs-stepper">
      <div className="bs-stepper-header">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep === index ? 'active' : ''}`}
            data-target={`step${index}`}
          >
            <div className="step-trigger">
              <span className='mb-1'>{
                currentStep === index && <img src={step[2]}/> != null ? 
                  <img src={step[1]}/> 
                  : <img src={step[2]}/>
              }
              </span>
              <span className="bs-stepper-label">{step[0]}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bs-stepper-content">
        {steps.map((step, index) => (
          <div
            key={index}
            id={`step${index}`}
            className={`content ${currentStep === index ? 'active' : ''}`}
          >
              {index == 0 ? <Details/> : index == 1 ? <Benefits/> : ''}
            <div className='footer'>
              <div className='footer-content'>
                <div className="footer-content__price">
                  <h5>$148.5</h5>
                  <p>/pax</p>
                </div>
                <div className="footer-content__btn">
                  <span
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                  >
                    <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697990523/Booking-Flight-Sprint/nyx4qhdyehrgqyivvazj.png" alt="" />
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentStep === steps.length - 1}
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

const OffcanvasDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} variant="primary">
        Open Offcanvas
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className='span-title'>
              <span>
                <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1698205222/Nube_ak9lon.svg"/>
              </span>
              <p>
                Cloudy Airlines
              </p>
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MyStepper />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffcanvasDetails;
