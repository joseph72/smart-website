import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#F6F6F6] pt-20 pb-8">
        <div className=" px-4 md:px-[5%] flex flex-col text-center md:text-start gap-4 place-items-center md:place-items-start md:flex-row w-full md:gap-16">
          <div className="logo-container grow text-center grid place-items-center md:place-items-start md:text-start space-y-3">
            <Image
              className="object-cover pb-4"
              src="/logo.png"
              width={100}
              height={100}
              alt=""
            />
            <div className="text-sm font-normal text-gray-400">
              Policies on Smart Insurance is provided <br /> by Shield Brokerage
              Ghana Ltd.
            </div>
            <div className="text-base text medium">
              ©2020 Smart Insurance. All Rights Reserved
            </div>
          </div>
          <div className="footer-third shrink">
            <div className="txt">
              <div>
                <b>PRODUCTS</b>
              </div>
              <div>Motor Insurance</div>
              <div>Home Insurance</div>
              <div>Personal Accident</div>
              <div>Travel Insurance</div>
            </div>
          </div>
          <div className="footer-third shrink">
            <div className="txt">
              <div>
                <b>COMPANY</b>
              </div>
              <div>About Us</div>
              <div>Contact Us</div>
              <div>Terms</div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <div className="footer-third shrink">
            <div>
              <b>FOLLOW US</b>
            </div>
            <div className="txt">
              <div className="flex space-x-1">
                <Image src="/fb.svg" width={24} height={24} alt="" />
                <span>Twitter</span>
              </div>
              <div className="flex space-x-1">
                <Image
                  className="object-cover"
                  src="/twitter.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
