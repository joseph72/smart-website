import React from "react";

export default function Travel() {
  return (
    <div className="pt-16">
      <div className="pa h-56 grid place-content-center">
        <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
        <h1 className="text-4xl font-semibold text-center mb-3 text-gray-100 uppercase">
          {"Travel Insurance"}
        </h1>
      </div>
      <div className=" px-4 lg:px-0">
        <div className="prose lg:prose-xl text-justify py-24  m-auto max-w-[90%] lg:min-w-[90%]">
          <h2 className="text-[#b00d0c]">Travel Insurance Policy</h2>
          <p>
            Traveling, whether for leisure or business, is always filled with
            excitement and adventure. However, it also comes with the important
            responsibility of ensuring your safety and security throughout the
            journey. To provide protection from potential risks while traveling
            outside the country, it is recommended to have travel insurance.
            This short-term policy covers various aspects such as medical
            expenses and financial losses that may occur during your trip,
            regardless of whether it is for business or recreation. The travel
            insurance policy offers indemnification for the following:
            <ul>
              <li>International medical and hospitalization expenses</li>
              <li> Medical evacuation services</li>
              <li> Repatriation expenses</li>
              <li> Compensation for incidents involving luggage - And more.</li>
            </ul>
            By having a comprehensive travel insurance policy in place, you can
            embark on your journeys with peace of mind, knowing that you are
            safeguarded against unforeseen circumstances and can focus on
            enjoying your travel experience.
          </p>
        </div>
      </div>
    </div>
  );
}
