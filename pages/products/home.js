import React from "react";

export default function Home() {
  return (
    <div className="pt-16">
      <div className="pa h-56 grid place-content-center">
        <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
        <h1 className="text-4xl font-semibold text-center mb-3 text-gray-100 uppercase">
          {"Home Insurance"}
        </h1>
      </div>
      <div className=" px-4 lg:px-0">
        <div className=" prose lg:prose-xl text-justify py-24  m-auto max-w-[90%] lg:min-w-[90%]">
          <h2 className="text-[#b00d0c]">Home Insurance Policy</h2>
          <p>
            Our Home Insurance policy offers comprehensive coverage for any
            mishaps that may occur within your home due to insured perils such
            as break-ins, fires, floods, explosions, and more. The Policy
            includes the following coverage:
            <ul>
              <li>
                Protection for your building: Safeguarding your property against
                loss or damage caused by perils like fire, explosions,
                lightning, storms, hurricanes, tornadoes, floods, earthquakes,
                volcanic eruptions, water tank bursts or overflows, and more.
              </li>
              <li>
                Coverage for your belongings: Insuring your personal belongings
                against the aforementioned perils, as well as burglary
                (excluding theft).
              </li>
              <li>
                Public liability coverage: Protecting you against any liability
                you may have towards the public.
              </li>
              <li>
                Provision for personal accidents: Offering coverage for personal
                accidents that may occur within your home.
              </li>
              <li>
                Additionally, if your building sustains accidental damage, the
                policy provides reimbursement for the actual cost of renting a
                suitable alternative accommodation during the reinstatement
                period (up to a maximum of 12 months). The amount is capped at
                ten percent of the property&apos;s total value per year, or a
                proportional monthly portion thereof.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
