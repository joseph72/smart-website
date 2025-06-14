import React from "react";
import Link from "next/link";

import Image from 'next/image';

export default function Footer() {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <div>
      <footer className="bg-[#F6F6F6] pt-10 pb-8">
        <div className=" px-4 md:px-[5%] flex flex-col text-center md:text-start gap-4 place-items-center md:place-items-start md:flex-row w-full md:gap-16">
          <div className="logo-container grow text-center grid place-items-center md:place-items-start md:text-start space-y-3">
            <div className="h-[36px] w-[100px]">
              <Image className="object-cover " fill  src="/logo.png" alt="" />
            </div>
            
            <div className="text-sm font-normal text-gray-400">
              Policies on Smart Insurance are provided <br /> by Shield
              Insurance Brokers.
            </div>
            <div className="text-xs text medium ">
              ©{fullYear} RevAssure Company Limited. All Rights Reserved{" "}
              <a className="none" href="http://www.revassure.net ">
                <span className="hover:underline">RevAssure.</span>
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div className="footer-third shrink">
              <div className="txt">
                <div>
                  <b>PRODUCTS</b>
                </div>
                <div>
                  <Link
                    className=" text-sm hover:text-neutral-600 lg:hover:underline"
                    href="/products/motor"
                  >
                    Motor Insurance
                  </Link>
                </div>
                <div>
                  <Link
                    className=" text-sm hover:text-neutral-600 lg:hover:underline"
                    href={`/products/home`}
                  >
                    Home Insurance
                  </Link>
                </div>
                <div>
                  <Link
                    className=" text-sm hover:text-neutral-600 lg:hover:underline"
                    href={`/products/pa`}
                  >
                    Personal Accident
                  </Link>
                </div>
                <div>
                  <Link
                    className=" text-sm hover:text-neutral-600 lg:hover:underline"
                    href={`/products/travel`}
                  >
                    Travel Insurance
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-third shrink">
              <div className="txt">
                <div>
                  <b>COMPANY</b>
                </div>
                {/* <div>About Us</div>
              <div>Contact Us</div> */}
                <div>
                  <a
                    className="text-sm hover:text-neutral-600 lg:hover:underline"
                    href="/documents/Terms_and_Conditions.pdf"
                    download="Terms_and_Conditions.pdf"
                  >
                    Terms and Conditions
                  </a>
                </div>

                <a
                  className="text-sm hover:text-neutral-600 lg:hover:underline"
                  href="/documents/Privacy_Policy.pdf"
                  download="Privacy_Policy.pdf"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="footer-third shrink hidden lg:block">
              <div>
                <b>FOLLOW US</b>
              </div>
              <div className="txt">
                <div className="flex space-x-[2px]">
                  <div className="w-6 h-6">
                  <Image fill src="/fb.svg" alt="" />
                  </div>
                 
                  <span className="text-sm hover:text-neutral-600 lg:hover:underline cursor-pointer">
                    Twitter
                  </span>
                </div>
                <div className="flex space-x-[2px]">
                  <div className="w-6 h-6">
                  <Image
                    className="object-cover w-6 h-6"
                    src="/twitter.svg"
                    alt=""
                    fill
                  /></div>
                  <span className="text-sm hover:text-neutral-600 lg:hover:underline cursor-pointer">
                    Facebook
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
