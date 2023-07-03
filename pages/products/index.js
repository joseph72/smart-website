import React from "react";
import { useRouter } from "next/router";
import { products } from "../../insure";

import Link from "next/link";

export default function Products({ item }) {
  return (
    <div className="max-w-5xl m-auto py-24">
      <div className="text-3xl text-center mb-3 uppercase">{"Products"}</div>

      <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
        <div className="overflow-hidden bg-white rounded shadow">
          <Link href={`/products/motor`} className="relative">
            <div title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-[13rem] border-b-gray-200 border"
                src="/motor.jpg"
                alt=""
              />
            </div>

            <div className="p-3">
              <div className="text-xl font-semibold mt-4">
                <p title="" className="text-black">
                  Motor Insurance
                </p>
              </div>
              <span className="text-sm font-normal text-gray-500 line-clamp-2">
                Our Motor Insurance Policy provides coverage for your legal
                liabilities towards third parties, as well as protection against
                damage to your vehicle caused by fire, theft, and other
                accidental risks. This policy is in accordance with the Motor
                Vehicles (Third party) Insurance Act (1958). There are three
                main categories of coverage available to insured individuals:
                third party damage, third party fire and theft, and
                comprehensive cover. Third Party Coverage Only This policy
                offers indemnity for you and any authorized driver in case of
                legal liability towards third parties for bodily injury, death,
                or damage to their property. The minimum limit for third-party
                property damage is currently GH¢7000, but it can be increased
                upon request. Bodily injury claims will be calculated as per the
                National Insurance Commission's Limits on Motor Injury and Death
                Claims (CAP 2021). Third Party, Fire and Theft In addition to
                the standard coverage provided by Third Party Motor Insurance,
                this policy extends protection to include theft and fire
                incidents involving your vehicle. Comprehensive Coverage The
                comprehensive motor policy offers extensive coverage, including
                liability protection towards third parties, damage to your own
                vehicle, accidental collision or overturning, fire, external
                explosion, self-ignition or lightning, theft, burglary,
                house-breaking, malicious acts, flood, storm, earthquake, riot,
                strike, civil commotion, and property damage. It also covers
                injury and death to third parties for which you may be legally
                liable.
              </span>
            </div>
          </Link>
        </div>
        <div className="overflow-hidden bg-white rounded shadow">
          <Link href="/products/home" className="relative">
            <div title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-[13rem] border-b-gray-200 border"
                src="/home.jpg"
                alt=""
              />
            </div>

            <div className="p-3">
              <div className="text-xl font-semibold mt-4">
                <p title="" className="text-black">
                  Home Insurance
                </p>
              </div>
              <span className="text-sm font-normal text-gray-500 line-clamp-2">
                Our Home Insurance policy offers comprehensive coverage for any
                mishaps that may occur within your home due to insured perils
                such as break-ins, fires, floods, explosions, and more. The
                Policy includes the following coverage:
                <br /> - Protection for your building: Safeguarding your
                property against loss or damage caused by perils like fire,
                explosions, lightning, storms, hurricanes, tornadoes, floods,
                earthquakes, volcanic eruptions, water tank bursts or overflows,
                and more.
                <br /> - Coverage for your belongings: Insuring your personal
                belongings against the aforementioned perils, as well as
                burglary (excluding theft).
                <br /> - Public liability coverage: Protecting you against any
                liability you may have towards the public.
                <br /> - Provision for personal accidents: Offering coverage for
                personal accidents that may occur within your home.
                <br /> Additionally, if your building sustains accidental
                damage, the policy provides reimbursement for the actual cost of
                renting a suitable alternative accommodation during the
                reinstatement period (up to a maximum of 12 months). The amount
                is capped at ten percent of the property's total value per year,
                or a proportional monthly portion thereof.
              </span>
            </div>
          </Link>
        </div>
        <div className="overflow-hidden bg-white rounded shadow">
          <Link href="/products/travel" className="relative">
            <div title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-[13rem] border-b-gray-200 border"
                src="/travel.jpg"
                alt=""
              />
            </div>

            <div className="p-3">
              <div className="text-xl font-semibold mt-4">
                <p title="" className="text-black">
                  Travel Insurance
                </p>
              </div>
              <span className="text-sm font-normal text-gray-500 line-clamp-2">
                Traveling, whether for leisure or business, is always filled
                with excitement and adventure. However, it also comes with the
                important responsibility of ensuring your safety and security
                throughout the journey. To provide protection from potential
                risks while traveling outside the country, it is recommended to
                have travel insurance. This short-term policy covers various
                aspects such as medical expenses and financial losses that may
                occur during your trip, regardless of whether it is for business
                or recreation. The travel insurance policy offers
                indemnification for the following:
                <br /> - International medical and hospitalization expenses
                <br /> - Medical evacuation services
                <br /> - Repatriation expenses
                <br /> - Compensation for incidents involving luggage - And
                more. <br />
              </span>
            </div>
          </Link>
        </div>
        <div className="overflow-hidden bg-white rounded shadow">
          <Link href="/products/pa" className="relative">
            <div title="" className="block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-[13rem] border-b-gray-200 border"
                src="/personal.jpg"
                alt=""
              />
            </div>

            <div className="p-3">
              <div className="text-xl font-semibold mt-4">
                <p title="" className="text-black">
                  Personal Accident Insurance
                </p>
              </div>
              <span className="text-sm font-normal text-gray-500 line-clamp-2">
                The Personal Accident Policy aims to protect individuals and
                alleviate the financial burden they may face following an
                accident. This policy offers compensation in the event of death
                or injury, permanent total disablement, temporary total
                disablement, and medical expenses resulting from accidental,
                violent, external, and visible causes. In case of death, a lump
                sum amount is payable. The Personal Accident Insurance provides
                round-the-clock coverage, 24 hours a day, 7 days a week, and
                extends its benefits globally.
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      item: products,
    },
  };
};

// export async function generateStaticParams() {
//   const pro = await fetch("../../insure.json").then((res) => res.json());
//   return {
//     props: {
//       data: pro,
//     },
//   };
// }
{
  /* <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
{data.map((item) => (
  <div
    key={item.key}
    className="overflow-hidden bg-white rounded shadow"
  >
    <Link href={`/products/${item.key}`} className="relative">
      <div title="" className="block aspect-w-4 aspect-h-3">
        <img
          className="object-cover w-full h-[13rem] border-b-gray-200 border"
          src={item.img}
          alt={item.img}
        />
      </div>

      <div className="p-3">
        <div className="text-xl font-semibold mt-4">
          <p title="" className="text-black">
            {item.title}
          </p>
        </div>
        <span className="text-sm font-normal text-gray-500 line-clamp-2">
          {item.text}
        </span>
      </div>
    </Link>
  </div>
))}
</div> */
}
