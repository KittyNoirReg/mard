// components/MyMap.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 43.65107,
  lng: -79.347015
};

export default function MyMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyChCjwDQqm4QzpybVp2xMOt6LJyRq0qhKE

let map;

function initMap() {
  // Map options
  const options = {
    zoom: 8,
    center: { lat: 43.7, lng: -79.42 }, 
  };

  // Create a new map and assign it to the 'map' div in the HTML
  map = new google.maps.Map(document.getElementById('map'), options);
}