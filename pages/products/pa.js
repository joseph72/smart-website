import React from "react";

export default function Personal() {
  return (
    <div className="pt-16">
      <div className="pa h-56 grid place-content-center">
        <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
        <h1 className="text-4xl font-semibold text-center mb-3 text-gray-100 uppercase">
          {"Personal Accident Insurance"}
        </h1>
      </div>
      <div className=" px-4 lg:px-0">
        <div className="prose lg:prose-xl text-justify py-24  m-auto max-w-[90%] lg:min-w-[90%]">
          <h2 className="text-[#b00d0c]">Personal Accident Insurance Policy</h2>
          <p>
            The Personal Accident Policy aims to protect individuals and
            alleviate the financial burden they may face following an
            accident.The Policy includes the following coverage:
            <ul>
              <li>Compensation in the event of death or injury.</li>
              <li>
                permanent total disablement, temporary total disablement, and
                medical expenses resulting from accidental.
              </li>
              <li>violent, external, and visible causes.</li>
              <li>In case of death, a lump sum amount is payable.</li>
              <li>
                Personal Accident Insurance provides round-the-clock coverage.
              </li>
              <li>
                24 hours a day, 7 days a week, and extends its benefits
                globally.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
