import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({eventData, center, zoom}) => {
    
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map( ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, date: ev.geometries[0].date})}/>
        }
    })
    
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAlQw8J6QtafZYA1L4sfwB-47-8THB9XsM"}}
                defaultCenter={center}
                defaultZoom = { zoom }
            >
                {markers}
                </GoogleMapReact>
                {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 13.0827,
        lng: 80.2707
    },
    zoom: 15
}

export default Map;
