import React, { useState,useEffect,useRef } from 'react';
import truck from "../Assests/truck.gif";
import Map from './map';
import Transit from './transit';


export default function Track(){
    const info = useRef(null);
    const [trackId,setTrackId] = useState('');
    const [tracking,setTracking] = useState(false);
    const[header1,setHeader1] = useState(["Chinese","Continetal","Desi","Italian"]);
    const[headerIndex,setHeaderIndex] = useState(0)
    const [trackIdError,setTrackIdError] = useState(false);

    var pattern  = new RegExp(/[0-9a-zA-Z]{10,}/);

    const location = {
        address: 'Delivering here',
        lat: 42.350787469606935, 
        lng:  -71.08254872371229,
      } // our location object from earlier

    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         if(headerIndex>=header1.length-1){
    //             setHeaderIndex(0)
    //         }
    //         else{
    //             setHeaderIndex(headerIndex + 1 )
    //         }
    //       }, 5000);
    //       return () => clearInterval(interval);
    // })

    // const images = ["https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/robson-hatsukami-morgan.jpg"
    // ,"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/12/shutterstock_1064062517-scaled.jpeg"
    // ,"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/pexels-david-dibert-1117210.jpg"
    // ,"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/pexels-pixabay-3274301.jpg"]

    const track = () =>{
        if(pattern.test(trackId)){
            setTracking(true)
            setTrackIdError(false)
            
        }
        else{
            setTracking(false)
            setTrackIdError(true)

        }
    }



    return(
        <div className='background-total'>
        <div className={tracking ? "background-tracking":"background-hidden"}>
            <div className='title'>
                <h1>
                Tracking your Shipment
                </h1>
                <h4>
                Find and track your shipping packages effortlessly, in Real Time
                </h4>
            </div>
        </div>
        <div className={tracking?'center tracking-div':'center'}>
        <div className='form'>
        <div className="txt_field">
        <input
            type='text'
            required = {true}
            onChange={(e) =>{setTrackId(e.target.value)}}
          />          
          <span></span>
          <label>Tracking Number</label>
        </div>
        
        <div className='btn-layout-1'>
        <div className='btn-primary-1' onClick={()=>{track()}}>
            Track
        </div>
        
        </div>
        
        </div>
        <div className={trackIdError?'trackId-info error':'trackId-info'}>
            Enter your 10 digit Tracking Id
        </div>
        <div className={tracking?"tracking":"truck"}>
            <span>
                <img src={truck} />
            </span>
        </div>
        </div>
        <div className={tracking?'info hidden':'info'}>
            <div className={tracking?'image-holder hide':'image-holder'}>
                <img src = {"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/robson-hatsukami-morgan.jpg"}/>
               <div>
                </div> 
            </div>
            <div className={tracking?'information hide-info':'information'}>
                <div className='head'>
                Why work with Paxy Cargo?
                </div>
                <ul>
                    <li>
                    Hear directly from our partners and clients:
                    </li>
                    <li>
                    “Paxy is our go-to for timely deliveries to our customers.”
                    </li>
                    <li>
                    “Facing logistical hurdles is a given; Paxy navigates these smoothly.”
                    </li>
                    <li>
                    “Their professionalism and expertise simplify our operations."”
                    </li>
                </ul>
            </div>
            </div>
        <div className={tracking?'tracking-info':'tracking-info hidden'} ref = {info}>
            <div>
            <Transit/>
            </div>
            <div>
                 <Map location={location}  zoomLevel={18} />
            </div>

        </div>
       
        </div>
    )
}
