import React from "react";
import { products } from "../../db";
export default function Motor() {
  return (
    <div className="pt-16">
      <div className="pa h-56 grid place-content-center">
        <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
        <h1 className="text-4xl font-semibold text-center mb-3 text-gray-100 uppercase">
          {"Motor Insurance"}
        </h1>
      </div>
      <div className=" px-4 lg:px-0">
        <div className="prose lg:prose-xl text-justify py-24  m-auto">
          <h2 className=" text-[#b00d0c]">Motor Insurance Policy</h2>
          <p>
            Our Motor Insurance Policy provides coverage for your legal
            liabilities towards third parties, as well as protection against
            damage to your vehicle caused by fire, theft, and other accidental
            risks. This policy is in accordance with the Motor Vehicles (Third
            party) Insurance Act (1958). There are three main categories of
            coverage available to insured individuals:
            <strong>
              Third party damage, Third party Fire and Theft, and Comprehensive
              cover.
            </strong>
            <ul>
              <li>
                <h4> Third Party Coverage</h4>
                Third Party Coverage Only This policy offers indemnity for you
                and any authorized driver in case of legal liability towards
                third parties for bodily injury, death, or damage to their
                property. The minimum limit for third-party property damage is
                currently GH¢7000, but it can be increased upon request. Bodily
                injury claims will be calculated as per the National Insurance
                Commission&apos;s Limits on Motor Injury and Death Claims (CAP
                2021).
              </li>
              <li>
                <h4>Third Party, Fire and Theft</h4>
                Third Party, Fire and Theft In addition to the standard coverage
                provided by Third Party Motor Insurance, this policy extends
                protection to include theft and fire incidents involving your
                vehicle.
              </li>
              <li>
                <h4>Comprehensive Coverage</h4>
                Comprehensive Coverage The comprehensive motor policy offers
                extensive coverage, including liability protection towards third
                parties, damage to your own vehicle, accidental collision or
                overturning, fire, external explosion, self-ignition or
                lightning, theft, burglary, house-breaking, malicious acts,
                flood, storm, earthquake, riot, strike, civil commotion, and
                property damage. It also covers injury and death to third
                parties for which you may be legally liable.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
