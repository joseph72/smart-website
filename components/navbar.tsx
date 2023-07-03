import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Drawer } from "antd";
import logo from "../public/logo.svg";
import bar from "../public/bars-solid.svg";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="nav-bar ">
        <div className="manner"></div>
        <nav>
          <div className="nav-brand">
            <Link href="/">
              <div className="logo">
                <img className="object-contain   h-11" src="/logo.png" alt="" />
              </div>
            </Link>
          </div>
          <div className=" open">
            <img
              onClick={showDrawer}
              className="w-7 cursor-pointer lg:hidden"
              src="/bars-solid.svg"
              alt=""
            />
            <Drawer placement="left" onClose={onClose} open={open}>
              <ul className="">
                <div className="menu-icons closed">
                  <i className="icon ion-md-close"></i>
                </div>
                {/* <Link href="/#insure">
                  <li className="nav-items">
                    <div className="nav-link current">Insure</div>
                  </li>
                </Link>
                <Link href="/#about">
                  <li className="nav-items">
                    <div className="nav-link">About</div>
                  </li>
                </Link> */}
                <Link href="/">
                  <li className="nav-items nav-link">
                    <div className={router.pathname == "/" ? "active " : ""}>
                      HOME
                    </div>
                  </li>
                </Link>
                <Link href="/products">
                  <li className="nav-items nav-link">
                    <div
                      className={
                        router.pathname == "/products" ? "active " : ""
                      }
                    >
                      PRODUCTS
                    </div>
                  </li>
                </Link>

                <Link href="/faq">
                  <li className="nav-items nav-link">
                    <div className={router.pathname == "/faq" ? "active " : ""}>
                      FAQ
                    </div>
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="nav-items nav-link">
                    <div
                      className={router.pathname == "/contact" ? "active " : ""}
                    >
                      CONTACT US
                    </div>
                  </li>
                </Link>
                <li className="nav-items">
                  <div className="barrier"></div>
                </li>
                <Link href="https://smart-insurance-uat.web.app/login">
                  <li className="nav-items">
                    <div className="nav-link text-[#b00d0c]">Log In</div>
                  </li>
                </Link>
                <Link href="https://smart-insurance-uat.web.app/sign-up">
                  <li className="nav-items">
                    <div className="nav-link button-3">Sign up</div>
                  </li>
                </Link>
              </ul>
            </Drawer>
          </div>

          <ul className="nav-list">
            <div className="menu-icons closed">
              <i className="icon ion-md-close"></i>
            </div>
            {/* <a href="#insure">
              <li className="nav-items">
                <div className="nav-link current">Insure</div>
              </li>
            </a>

            <a href="#about">
              <li className="nav-items">
                <div className="nav-link">About</div>
              </li>
            </a> */}
            <Link href="/">
              <li className="nav-items nav-link">
                <div className={router.pathname == "/" ? "active " : ""}>
                  HOME
                </div>
              </li>
            </Link>
            <Link href="/products">
              <li className="nav-items nav-link">
                <div
                  className={router.pathname == "/products" ? "active " : ""}
                >
                  PRODUCTS
                </div>
              </li>
            </Link>

            <Link href="/faq">
              <li className="nav-items nav-link">
                <div className={router.pathname == "/faq" ? "active " : ""}>
                  FAQ
                </div>
              </li>
            </Link>
            <Link href="/contact">
              <li className="nav-items nav-link">
                <div className={router.pathname == "/contact" ? "active " : ""}>
                  CONTACT US
                </div>
              </li>
            </Link>
            <li className="nav-items">
              <div className="barrier"></div>
            </li>

            <Link href="https://smart-insurance-uat.web.app/login">
              <li className="nav-items">
                <div className="nav-link text-[#b00d0c]">Log In</div>
              </li>
            </Link>
            <Link href="https://smart-insurance-uat.web.app/sign-up">
              <li className="nav-items">
                <div className="nav-link button-3 hover:!text-gray-50">
                  Sign up
                </div>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
