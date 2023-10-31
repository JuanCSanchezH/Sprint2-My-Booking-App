import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Passenger from './index';
import Payment from './index';



const MyStepper = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    const [agreeChecked, setAgreeChecked] = useState(false);
  
    const handleNext = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };
  
    return (
      <div>
        <h1>My booking</h1>
      <div id="stepper" className="bs-stepper horizontal">
        <div className="bs-stepper-header" role="tablist">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${currentStep === index ? 'active' : ''}`}
              data-target={`step${index}`}
              role="tab"
            >
              <button className="step-trigger" role="tab">
                <span className="bs-stepper-circle">{index + 1}</span>
                <span className="bs-stepper-label">{step}</span>
              </button>
              {index < steps.length - 1 && (
                <div className="line"></div>
              )}
            </div>
          ))}
        </div>
        <div className="bs-stepper-content">
          {steps.map((step, index) => (
            <div
              key={index}
              id={`step${index}`}
              className={`content ${currentStep === index ? 'active' : ''}`}
              role="tabpanel"
            >
              {step}  {(() => {
      switch (index) {
        case 0:
          return <Passenger />;
        case 1:
          return <Payment />;
        case 2:
          return "contenido de esteban";
        default:
          return null;
      }
    })()}
              {index === 2 && (
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreeCheckbox"
                    checked={agreeChecked}
                    onChange={(e) => setAgreeChecked(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="agreeCheckbox">
                    I agree to continue
                  </label>
                </div>
              )}
              <button
                className="btn btn-primary me-2"
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              {index === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={handleNext}
                  disabled={!agreeChecked}
                >
                  Next
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                >
                  Next
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  export default MyStepper