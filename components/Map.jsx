import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import DirectionsService from 'react-google-maps/lib/DirectionsService';

const Map = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 41.850033, lng: -87.6500523 }} // Default center
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

const Home = () => {
  const [directions, setDirections] = useState(null);

  const onDirectionsFetched = (result) => {
    setDirections(result);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Map
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      >
        <DirectionsService
          options={{
            destination: 'Destination Address',
            origin: 'Source Address',
            travelMode: 'DRIVING' // Other options: 'WALKING', 'BICYCLING', 'TRANSIT'
          }}
          callback={onDirectionsFetched}
        />
      </Map>
    </div>
  );
};

export default Home;