import React from 'react';
import Card from './card.js'
import Ratings from '../Assests/ratings.png'
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()
  const next_services =()=>{
    navigate('/services');
  }

    let data=[{
        body:"Large shipments with a direct, exclusive truck route."
    },

    {
        body:"Efficient, eco-friendly long-distance transport using multiple modes."
    },
    
    {
        body:"Transport for perishables in controlled temperatures for freshness."
    }
]

let service_data=[{
    title:"Full Truckload (FTL) Shipping",
    body:"FTL shipping is utilized for large shipments that need the entire space or weight limit of a truck. This service is faster than LTL as it goes directly from point A to point B without stopping to pick up other shipments."
},

{
    title:"Intermodal Transportation",
    body:"Intermodal transportation involves moving cargo using more than one mode of transport, such as combining truck, rail, and ship to optimize delivery times, costs, and environmental impact. This service is ideal for long-distance shipments."
},

{
    title:"Cold Chain Logistics",
    body:"Cold chain logistics are specialized services designed to transport perishable goods that require temperature-controlled environments, such as food products, pharmaceuticals, and certain chemicals, ensuring they remain fresh and intact upon delivery."
}
]
    return(
        <div>
       
        <div className='tag-line'>
        <h1><span>WE'RE</span> <span>GLOBAL</span> <span>LOGISTICS</span> <span>PROVIDERS</span></h1>
        </div>
        
        <div className='home-container'>
        <div className='h_card'>
        {data.map(elem=>(
            <Card
            body={elem.body}
        />
        ))}     
    </div>
    </div>
    <div className='logistics-parnter'>
        <div className='logistics-title'>
            <h2>Logistics Partner</h2>
        </div>
        <div className="logistics-main">
        <div className='logistics-body'>
        <b>Connect with a global logistics network through a reliable partner.</b>
        <p>You need tailored solutions and a service you can depend on every time. Paxy Cargo is the choice for customers who need to transport products and materials locally, across the country, and around the globe to virtually any destination. As a comprehensive logistics service provider, Paxy Cargo oversees the entire process of material transportation from start to finish.</p>
        </div>
        </div>
        </div>
        <div className='ratings'>
        <img src={Ratings} alt='ratings'></img>
        </div>
        <div>
            <h1>Our Services</h1>
            <div className='view-services'>
                <a href='/services'><h5>View all</h5></a>
            </div>
        <div className='service-container'>
        <div className='s_card'>
        {service_data.map(elem=>(
            <Card
            title={elem.title}
            body={elem.body}
        />
        ))}     
    </div>
    </div>
        </div>
        </div>
    )
}
