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
                +233 54 435 6888 <br />
                +233 24 227 0895 <br />
                +233 54 571 8278 <br />
              </p>
            </div>
            <div className=" shadow-lg cc text-center text-gray-100">
              <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
              <h4 className="text-gray-100">Address</h4>
              <p>Smart Insurance, Market High St. - Accra</p>
            </div>
          </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63533.003950615304!2d-0.1946211999872911!3d5.59466526277045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf85003eca3ce9%3A0x4898e1d785af38e3!2sSmart%20Insurance!5e0!3m2!1sen!2sca!4v1745620746690!5m2!1sen!2sca" 
            className="mt-10"
            width="100%" 
            height="450" 
            loading="lazy"
            ></iframe>
        </div>
      </div>
    </div>
  );
}
