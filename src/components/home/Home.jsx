import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './styleHome.scss'
import Maps from './Maps'
import New from './New'


const Home = () => {
    const [value, setValue] = useState(new Date());
    const onChange = (date) => {
        setValue(date);
    };

    function handleFormSubmit() {
        const fromInput = document.querySelector(".text-wrapper-11");
        const toInput = document.querySelector(".text-wrapper-13");
        
        console.log("From:", fromInput.value);
        console.log("To:", toInput.value);
        console.log("Selected Date:", value);
    }
    
  return (
    <>
        <div className="container">
            <div className="container-home">
                <div className="overlap">
                    <div className="group">
                        <div className="overlap-group">
                            <img className="airplane" alt="airplane" src="https://c.animaapp.com/BW7x2fG0/img/image-1-1.svg" />
                            <img className="oval-green" alt="Oval" src="https://c.animaapp.com/BW7x2fG0/img/oval-1.svg" />
                            <img className="oval-red" alt="Oval" src="https://c.animaapp.com/BW7x2fG0/img/oval-1-1.svg" />
                            <img className="oval-blue" alt="Oval" src="https://c.animaapp.com/BW7x2fG0/img/oval-1-2.svg" />
                        </div>
                    </div>
                    <div className="group-2">
                        <div className="overlap-2">
                            <div className="text-wrapper-3">Houston</div>
                            <div className="text-wrapper-4">Texas, United States</div>
                        </div>
                        <div className="overlap-3">
                            <div className="text-wrapper-5">28</div>
                            <img className="oval-black" alt="Oval" src="https://c.animaapp.com/BW7x2fG0/img/oval-1-4.svg" />
                            <div className="text-wrapper-6">mostly sunny</div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="oval-wrapper">
                                <img className="oval-pink" alt="Oval" src="https://c.animaapp.com/BW7x2fG0/img/oval-1-7.svg" />
                            </div>
                        </div>
                        <div className="overlap-4">
                            <img className="line" alt="Line" src="https://c.animaapp.com/BW7x2fG0/img/line-1-3.svg" />
                            <div className="rectangle" />
                        </div>
                        <div className="text-wrapper-7">today</div>
                    </div>
                </div>
                <div className="tag">
                    <div className="frame">
                        <div className="text-wrapper-8">1</div>
                        <img className="icon-1" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame.svg" />
                        <img className="icon-2" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-1.svg" />
                    </div>
                </div>
                <img className="line-2" alt="Line" src="https://c.animaapp.com/BW7x2fG0/img/line-1.svg" />
                <div className="frame-wrapper">
                    <div className="frame-2">
                        <div className="text-wrapper-9">One way</div>
                        <img className="icon-1" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-2.svg" />
                    </div>
                </div>
                <div className="tag-2">
                    <div className="frame-3">
                        <div className="text-wrapper-10">Round trip</div>
                        <img className="icon-1" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-3.svg" />
                    </div>
                </div>
                <div className="tag-3">
                    <div className="frame">
                        <div className="text-wrapper-8">Economy</div>
                        <img className="frame-4" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-4.svg" />
                        <img className="icon-1" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-5.svg" />
                    </div>
                </div>
                <div className="group-3">
                    <img className="frame-5" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-6.svg" />
                    <div className="textbox">
                        <input className="text-wrapper-11" type="text" placeholder='Houston (HOU)' />
                        <div className="text-wrapper-12">From</div>
                    </div>
                    <div className="textbox-2">
                        <input className="text-wrapper-13" type='text' placeholder='Where is your destination?'/>
                        <div className="text-wrapper-12">To</div>
                    </div>
                    <img className="line-3" alt="Line" src="https://c.animaapp.com/BW7x2fG0/img/line-1-2.svg" />
                    <img className="line-4" alt="Line" src="https://c.animaapp.com/BW7x2fG0/img/line-1-2.svg" />
                </div>
                <div className="text-wrapper-14">Find your flight</div>
                <button className="button">
                    <div className="text-wrapper-15">Departure date</div>
                    <img className="icon-5" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-7.svg" />
                </button>
                <button className="button-2">
                    <div className="text-wrapper-16">Returned date</div>
                    <img className="icon-6" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-8.svg" />
                </button>
                <div className="calendary">
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div className="overlap-5">
                    <button onClick={handleFormSubmit} className="button-3">
                        <img className="icon-7" alt="Frame" src="https://c.animaapp.com/BW7x2fG0/img/frame-12.svg" />
                    </button>
                </div>
            </div>

            <Maps/>
            <New/>
        </div>
    </>
  )
}

export default Home

