import React from "react";

export default function Contact() {
  return (
    <div className="pt-16">
      <div className="pa h-56 grid place-content-center">
        <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
        <h1 className="text-4xl font-semibold text-center mb-3 text-gray-100 uppercase">
          {"Contact Us"}
        </h1>
      </div>
      <div className=" m-auto">
        <div className=" prose lg:prose-xl  py-24  m-auto max-w-[90%] lg:min-w-[90%]">
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

          <iframe
            className="mt-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5516490923537!2d-0.1790722245923842!3d5.632994594348141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b6fc98d5583%3A0xc1a5b8d76b15e3d6!2s113a%20Mbabane%20Ave%2C%20Accra!5e0!3m2!1sen!2sgh!4v1691020670348!5m2!1sen!2sgh"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
