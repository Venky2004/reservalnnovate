import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const SearchHotels = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 16.4419, lng: 80.6226 }}
  >
    <Marker position={{ lat: 16.4419, lng: 80.6226 }} />
  </GoogleMap>
));

export default SearchHotels;





