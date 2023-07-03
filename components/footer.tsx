import React from "react";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <div>
      <footer className="bg-[#F6F6F6] pt-20 pb-8">
        <div className=" px-4 md:px-[5%] flex flex-col text-center md:text-start gap-4 place-items-center md:place-items-start md:flex-row w-full md:gap-16">
          <div className="logo-container grow text-center grid place-items-center md:place-items-start md:text-start space-y-3">
            <img className="object-cover h-11" src="/logo.png" alt="" />
            <div className="text-sm font-normal text-gray-400">
              Policies on Smart Insurance are provided <br /> by Shield
              Insurance Brokers.
            </div>
            <div className="text-base text medium">
              ©{fullYear} Smart Insurance. All Rights Reserved
            </div>
          </div>
          <div className="footer-third shrink">
            <div className="txt">
              <div>
                <b>PRODUCTS</b>
              </div>
              <div>
                <Link
                  className="underline hover:text-neutral-600"
                  href="/products/motor"
                >
                  Motor Insurance
                </Link>
              </div>
              <div>
                <Link
                  className="underline hover:text-neutral-600"
                  href={`/products/home`}
                >
                  Home Insurance
                </Link>
              </div>
              <div>
                <Link
                  className="underline hover:text-neutral-600"
                  href={`/products/pa`}
                >
                  Personal Accident
                </Link>
              </div>
              <div>
                <Link
                  className="underline hover:text-neutral-600"
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
                  className="underline"
                  href="/documents/Terms_and_Conditions.pdf"
                  download="Terms_and_Conditions.pdf"
                >
                  Terms and Conditions
                </a>
              </div>

              <a
                className="underline"
                href="/documents/Privacy_Policy.pdf"
                download="Privacy_Policy.pdf"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="footer-third shrink">
            <div>
              <b>FOLLOW US</b>
            </div>
            <div className="txt">
              <div className="flex space-x-1">
                <img className="w-6 h-6" src="/fb.svg" alt="" />
                <span>Twitter</span>
              </div>
              <div className="flex space-x-1">
                <img
                  className="object-cover w-6 h-6"
                  src="/twitter.svg"
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
