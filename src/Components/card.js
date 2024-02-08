import React from 'react'
import { useNavigate } from "react-router-dom";

const Card = ({title,body}) => {
    const navigate = useNavigate()
  const next_services =()=>{
    navigate('/services');
  }
    
  return (
    <div className='card_app'>
    <div className='card-content'>
    <div className='card-title'>
      <p>{title}</p>
    </div>
    <div className='card-body'>
      <p>{body}</p>
    </div>
    </div>
    <div className='btn-primary-1' onClick={()=>next_services()}>
        <a>
          View More
        </a>
    </div>
    </div>
  )
}

export default Card