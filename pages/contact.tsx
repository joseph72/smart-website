import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Contact() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  // });

  // if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl m-auto">
      <div className="prose lg:prose-xl py-24 max-w-full">
        <h1 className=" text-center mb-3">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className=" shadow-lg ca text-center text-gray-100">
            <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
            <h4 className="text-gray-100">Email</h4>
            <p>support@smartinsurancegh.com </p>
          </div>
          <div className=" shadow-lg cb text-center text-gray-100">
            <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
            <h4 className="text-gray-100">Phone</h4>
            <p>
              +233 50 251 4699 <br />
              +233 24 227 0895 <br />
              +233 24 464 4974 <br />
            </p>
          </div>
          <div className=" shadow-lg cc text-center text-gray-100">
            <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
            <h4 className="text-gray-100">Address</h4>
            <p>113A Mbabane Avenue, East Legon - Accra</p>
          </div>
        </div>
      </div>

      <div className="py-5 ">{/* <Map /> */}</div>
    </div>
  );
}
// function Map() {
//   const center = useMemo(() => ({ lat: 5.6331912, lng: -0.1764908 }), []);

//   return (
//     <GoogleMap
//       zoom={10}
//       center={center}
//       mapContainerClassName="h-[24rem] w-full"
//     >
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }
