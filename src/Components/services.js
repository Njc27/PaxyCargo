import React,{useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import circle from "../Assests/circle.png";


export default function Services(){
        const images = [
    {image:"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/robson-hatsukami-morgan.jpg",
    title:"Full Truckload (FTL) Shipping",
    content:"FTL shipping is utilized for large shipments that need the entire space or weight limit of a truck. This service is faster than LTL as it goes directly from point A to point B without stopping to pick up other shipments.",
    card1:true,
    color:"white",textColor:"black"}

    ,{image:"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/12/shutterstock_1064062517-scaled.jpeg",
    title:"Intermodal Transportation",
    content:"Intermodal transportation involves moving cargo using more than one mode of transport, such as combining truck, rail, and ship to optimize delivery times, costs, and environmental impact. This service is ideal for long-distance shipments.",
    card1:false,
    color:"#006FB2",textColor:"white"}

    ,{image:"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/pexels-david-dibert-1117210.jpg",
    title:"Cold chain logistics",
    content:"Cold chain logistics are specialized services designed to transport perishable goods that require temperature-controlled environments, such as food products, pharmaceuticals, and certain chemicals, ensuring they remain fresh and intact upon delivery.",
    card1:true,
    color:"white",textColor:"black"}
    
    ,{image:"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/pexels-pixabay-3274301.jpg",
    title:"Logistics Partner",
    content:"Connect with a global logistics network through a reliable partner. You need tailored solutions and a service you can depend on every time. Paxy Cargo is the choice for customers who need to transport products and materials locally, across the country, and around the globe to virtually any destination. As a comprehensive logistics service provider, Paxy Cargo oversees the entire process of material transportation from start to finish.",
    card1:false,
    color:"white",textColor:"black"}
    ]

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    
    return(
        <>
        <div className='services'>
            <div className='service-nav'>
                <ul>
                   {images?.map(img =>(
                    <div onClick={()=>setIndex(images.indexOf(img))}>
                        <div>
                            <img src = {circle}/>
                        </div>
                    <li className={index === images.indexOf(img)?'active-li':''}>
                        {img?.title}
                    </li>
                    </div>
                   ))}
                </ul>
            </div>
            <div>
        <Carousel activeIndex={index} onSelect={handleSelect} controls = {false} indicators	= {false} interval = {"5500"}>
        {images.map(img =>(
        <Carousel.Item>
        {img?.card1 ?(<div className='service-card' style={{backgroundColor:img?.color,color:img?.textColor}}>
        <div className='service-img'>
            <img src = {img?.image}/>
        </div>
        <div className='service-data'>
            <h3>{img?.title}</h3>
            <p>{img?.content}</p>
        </div>
        </div>):
        (<div className='service-card-2'style={{backgroundColor:img?.color,color:img?.textColor}}>
        <div className='service-data'>
            <h3>{img?.title}</h3>
            <p>{img?.content}</p>
        </div>
        <div className='service-img'>
            <img src = {img?.image}/>
        </div>
        </div>)}
        </Carousel.Item>
        ))}
    </Carousel>
    </div>
    
        </div>
        <div className='otherServices-header'>
            Other Services
        </div>
        <div className='otherServices'>
        <div className='service-data'>
            <h3>CHARTER</h3>
            <h5 className='service-subHeader'>
            From global locations to the furthest reaches.
            </h5>
            <p>
            Paxy Cargo customizes charter solutions to fit your unique needs. Whether it's time-sensitive goods, hazardous substances, perishables, or bulky items, we offer both partial and full charter services on both scheduled and unscheduled flights, ensuring unparalleled flexibility in transportation.
            </p>
        </div>
        <div className='service-data'>
            <h3>SUPPLIER DIVERSITY</h3>
            <h5 className='service-subHeader'>
            Comprehensive Warehouse Services.
            </h5>
            <p>
            We offer a suite of integrated services encompassing Warehousing, Pick and Pack, Consolidation, Distribution, and Cargo Screening/General Order (G.O.), strategically situated along the Heavyweight and Oversized Cargo Access Road. Our location is just 4 minutes from Logan Air Cargo Terminal and Conley Ocean Cargo Terminal, providing:
                –Cargo Screening / G.O. (Government Order) services<br></br>
                -Full Packaging, Distribution, and Trucking to Gateway operations<br></br>
                -Efficient Pick & Pack processes<br></br>
                Additionally, our Hub features Refrigeration Services tailored for Specialized Commodities with specific Temperature Requirements, ensuring optimal care and handling.<br></br>
            </p>
        </div>
        <div className='service-data'>
            <h3>WAREHOUSING</h3>
            <h5 className='service-subHeader'>
            Looking for a government contract partner?
            </h5>
            <p>
            Reach out to us at contracts@Paxycargo.com for discussions on Prime and Sub-Prime Contractor roles. 
            <br></br>
            Explore our various certifications at the city, state, and federal levels, which include:
<br></br>
- Woman Business Enterprise (WBE)<br></br>
- Disadvantaged Business Enterprise (DBE)<br></br>
- Women’s Business Enterprise National Council (WBENC)<br></br>
- Woman-Owned Small Business (WOSB)<br></br>
- Economically Disadvantaged Women-Owned Small Business (EDWOSB)<br></br>
- Airport Concession Disadvantaged Business Enterprise (ACDBE)<br></br>
- Small Local Business Enterprise (SLBE)<br></br>
            </p>
        </div>
    </div>
        </>
    )
}
