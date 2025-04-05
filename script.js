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
  // Log the API key to ensure it's being passed correctly
  console.log("Google Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      onLoad={() => console.log("Google Maps script loaded successfully")}
      onError={(error) => console.error("Error loading Google Maps script:", error)}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={() => console.log("Google Map loaded successfully")}
        onError={(error) => console.error("Error loading Google Map:", error)}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
