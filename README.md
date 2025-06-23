# MARD
Check out our website:
https://mard-ten.vercel.app/index.html

---------------------------------------------------------
# Tools Used
- Visual Studio Code
- Google Map API
---------------------------------------------------------

# Steps We Took
Step 1: Set up the project
In your terminal:
npx create-next-app@latest project-mard
cd touch-project-mard
npm install
Then install the Google Maps dependency:
npm install @react-google-maps/api

Step 2: Add your Google Maps API key
Create a file called .env.local in the root folder and add:
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

Step 3: Create the Map component
Create a new file: components/Map.js
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 43.6532,
  lng: -79.3832
};

const locations = [
  {
    name: 'High Park',
    description: 'Beautiful trails, zoo, and cherry blossoms in spring.',
    position: { lat: 43.6465, lng: -79.4637 }
  },
  {
    name: 'Don Valley Trails',
    description: 'A scenic route perfect for biking and hiking.',
    position: { lat: 43.6907, lng: -79.3623 }
  }
];

export default function MapComponent() {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={loc.position}
            onClick={() => setSelected(loc)}
          />
        ))}

        {selected && (
          <InfoWindow
            position={selected.position}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

Step 4: Use it in your main page
Update pages/index.js:
import Head from 'next/head';
import MapComponent from '../components/Map';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Touch Grass GTA</title>
      </Head>
      <main>
        <h1>Explore Nature in the GTA</h1>
        <MapComponent />
      </main>
    </div>
  );
}

Step 5: Style it up (Optional)
In styles/globals.css, add:
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f1f7f3;
}

h1 {
  text-align: center;
  margin-top: 20px;
  color: #2e7d32;
}

main {
  padding: 20px;
}

Features 
- Search bar for interest filters
- Use Ollama API to recommend places
- Add events/volunteering from APIs
- Save plans locally or to a profile
