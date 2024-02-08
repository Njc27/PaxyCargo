import React from 'react'
import GoogleMapReact from 'google-map-react'
import pin from "../Assests/pin.gif"
import { mapStyle } from '../utils/mapStyles'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

const Map = ({ location, zoomLevel }) => {

    const LocationPin = ({ text }) => (
        <div className="pin">
          <img src = {pin} className="pin-icon" />
          <p className="pin-text">{text}</p>
        </div>
      )

    return(
<div className="map">  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC3ivepUDvZMvZP6yMff7F3f_rmgwtiuRQ' }}
          mapId = "7e6eaf0d296d4b40"
          defaultCenter={location}
          defaultZoom={zoomLevel}
          draggable = { false}
           zoomControl = { false}
            scrollwheel = { false}
            style={mapStyle}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
          
        </GoogleMapReact>
      </div>
    </div>
    ) 
    }

export default Map;
