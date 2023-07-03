import React, { useRef } from "react";
import { Carousel } from "antd";
import { data } from "../db";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  const moveScrollLeft = () => {
    let slider = document.getElementById("scroll");
    slider!.scrollLeft -= 250;
  };
  const moveScrollRight = () => {
    let slider = document.getElementById("scroll");
    slider!.scrollLeft += 250;
  };
  return (
    <div>
      <div className="carousel-height">
        <Carousel autoplay>
          <div>
            <div className="image-1 image">
              <div className="bg-neutral-900 h-full w-full absolute opacity-50"></div>
              <div className="main-message">
                <div className="carousel-heading text-3xl font-medium">
                  Motor <br /> Insurance
                </div>
                <p className="text-lg font-normal">
                  Choose from Comprehensive Cover, Third Party, Fire and Theft,
                  or Motor Third Party
                </p>
                <button
                  className="btn button"
                  onClick={() => router.push("/products/motor")}
                >
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="image-2 image">
              <div className="bg-neutral-900 h-full w-full absolute opacity-50"></div>
              <div className="main-message">
                <div className="carousel-heading text-3xl font-medium">
                  Home <br /> Insurance
                </div>
                <p className="text-lg font-normal">
                  Safeguard your home from fire, various risks, burglary, and
                  personal accidents
                </p>
                <button
                  className="btn button "
                  onClick={() => router.push("/products/home")}
                >
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="image-3 image ">
              <div className="bg-neutral-900 h-full w-full absolute opacity-50"></div>
              <div className="main-message">
                <div className="carousel-heading text-3xl font-medium">
                  Travel <br /> Insurance
                </div>
                <p className="text-lg font-normal">
                  Ensuring your safety and well-being during international
                  travels
                </p>
                <button
                  className="btn button"
                  onClick={() => router.push("/products/travel")}
                >
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="image-4 image">
              <div className="bg-neutral-900 h-full w-full absolute opacity-50"></div>
              <div className="main-message">
                <div className="carousel-heading text-3xl font-medium">
                  Personal <br /> Accident
                </div>
                <p className="text-lg font-normal">
                  Looks after your family and cover your medical expenses if you
                  lose <br /> your life or are disabled as a result of an
                  accident
                </p>
                <button
                  className="btn button"
                  onClick={() => router.push("/products/pa")}
                >
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <section className="rolling relative">
        <div className="md:flex text-center">
          <div className="text-black text-xl font-medium p-4 md:text-2xl md:py-8 md:px-16 md:font-semibold  flex-1">
            Policies from Industry Leading Companies
          </div>
        </div>
        <div className=" md:pl-[3%] md:pb-6">
          <div className="hidden md:absolute lg:flex space-x-4 items-center -top-20 right-[6.5%]">
            <div
              className="p-4 hover:bg-slate-100 cursor-pointer rounded-full"
              onClick={moveScrollLeft}
            >
              <img className="w-7 h-7" src="/left-hook.svg" alt="" />
            </div>
            <div
              className="p-4 hover:bg-slate-100 cursor-pointer rounded-full"
              onClick={moveScrollRight}
            >
              <img className="w-7 h-7" src="/right-hook.svg" alt="" />
            </div>
          </div>
          <div id="scroll" className="alpha scrollbar-hide">
            <div className="flex space-x-3 w-max">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="pane shadow-1 w-44 flex place-content-center"
                >
                  <img
                    className="rolling-logo object-cover w-[100px] h-[100px]"
                    src={item.img}
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid auth">
        <section className="policies" id="insure">
          <div className="text-white text-center text-xl font-medium p-4 md:text-2xl md:pt-8 md:pb-0 md:px-16 md:font-semibold  flex-1">
            Explore amazing insurance products
          </div>
          <div className="policy-grid px-4 md:px-[5%]">
            <div className="policy-grid-items t">
              <div className="m">
                <img
                  className="pic1 w-full object-cover h-[450px] w-[450px]"
                  src="/motor.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <div className="custom-shape-divider-bottom-1592849545 mt mk bottom-0">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
                <div className="custom-shape-divider-bottom-1592851438 pm">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="card-info">
                {/* <img className="wave" src="assets/wave.svg" alt=""> */}
                <div className="text-xl m-title">
                  Motor <br /> Insurance
                </div>
                <button
                  className="btn btn-1 "
                  onClick={() => router.push("/products/motor")}
                >
                  <div className="flex space-x-3 items-center">
                    <span>Learn More</span>
                    <img
                      className="back w-[100px] h-[100px]"
                      src="/back.png"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="policy-grid-items t">
              <div className="m">
                <img
                  className="pic1 w-full object-full w-[450px] w-[450px]"
                  src="/home.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <div className="custom-shape-divider-bottom-1592849545 mt mk bottom-0">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
                <div className="custom-shape-divider-bottom-1592851438 pm">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="card-info">
                {/* <img className="wave" src="assets/wave.svg" alt="">  */}
                <div className="text-xl m-title">
                  Home <br />
                  Insurance
                </div>
                <button
                  className="btn btn-1"
                  onClick={() => router.push("/products/home")}
                >
                  <div className="flex space-x-3 items-center">
                    <span>Learn More</span>
                    <img
                      className="back"
                      width={100}
                      height={100}
                      src="/back.png"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="policy-grid-items t">
              <div className="m">
                <img
                  className="pic1 w-full object-cover"
                  width={450}
                  height={450}
                  src="/personal.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <div className="custom-shape-divider-bottom-1592849545 mt mk bottom-0">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
                <div className="custom-shape-divider-bottom-1592851438 pm">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="card-info">
                <div className="text-xl m-title">
                  Personal <br /> Accident
                </div>
                <button
                  className="btn btn-1"
                  onClick={() => router.push("/products/pa")}
                >
                  <div className="flex space-x-3 items-center">
                    <span>Learn More</span>
                    <img
                      className="back"
                      width={100}
                      height={100}
                      src="/back.png"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="policy-grid-items t">
              <div className="m">
                <img
                  className="pic1 w-full object-cover"
                  width={450}
                  height={450}
                  src="/travel.jpg"
                  alt=""
                />
                <div className="overlay"></div>
                <div className="custom-shape-divider-bottom-1592849545 mt mk bottom-0">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
                <div className="custom-shape-divider-bottom-1592851438 pm">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="card-info">
                <div className="text-xl m-title">
                  Travel <br />
                  Insurance
                </div>
                <button
                  className="btn btn-1"
                  onClick={() => router.push("/products/travel")}
                >
                  <div className="flex space-x-3 items-center">
                    <span>Learn More</span>
                    <img
                      className="back"
                      width={100}
                      height={100}
                      src="/back.png"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="why px-4 md:px-[5%]" id="about">
        <div className="text-black text-xl font-medium p-4 md:text-2xl md:py-8 md:px-16 md:font-semibold text-center flex-1">
          why use smart insurance?
        </div>
        <div className="why-grid">
          <div className="why-grid-items">
            <div className="flex place-content-center md:place-content-start">
              <img
                className="w-[49px]"
                width={100}
                height={100}
                src="/bolt.svg"
                alt=""
              />
            </div>
            <div className="ajy-heading-6 primary-solid-fg pad-1rem why-head">
              instant insurance under 5 minutes
            </div>
            <div className="ajy-body-1">
              Protecting You in Just 5 Minutes&quot;, embodies the core value
              proposition of our Smart insurance service, emphasizing speed,
              convenience, and immediate coverage. In today&apos;s fast-paced
              world, we understand that time is of the essence, and that is why
              we have designed a seamless insurance experience that takes just
              minutes to secure.
            </div>
            <div className="momo-grid">
              <div className="momo-grid-items">
                <img width={100} height={100} src="/atm-coloured.png" alt="" />
              </div>
              <div className="momo-grid-items">
                <img width={100} height={100} src="/mtn-coloured.png" alt="" />
              </div>
              <div className="momo-grid-items">
                <img
                  width={100}
                  height={100}
                  src="/vf-cash-coloured.png"
                  alt=""
                />
              </div>
            </div>
            <div className="divider"></div>
          </div>
          <div className="why-grid-items">
            <div className="flex place-content-center md:place-content-start">
              <img
                width={100}
                height={100}
                className="w-[49px]"
                src="/insure.svg"
                alt="insure icon"
              />
            </div>
            <div className="ajy-heading-6 primary-solid-fg pad-1rem why-head">
              all policies on one platform
            </div>
            <div className="ajy-body-1">
              Smart Insurance highlights the convenience and simplicity of
              accessing and managing various insurance policies all in one
              centralized platform. Instead of dealing with different insurers
              or websites, users can conveniently manage their policies, compare
              options, and make informed decisions from a unified platform.
            </div>

            <div className="instant-insure flex -space-x-4 items-center">
              <img
                className="w-10 h-10 rounded-full"
                width={16}
                height={16}
                src="/star.svg"
                alt="star icon"
              />

              <img
                className="w-10 h-10 rounded-full"
                width={16}
                height={16}
                src="/h.svg"
                alt="hollard icon"
              />

              <img
                className="w-10 h-10 rounded-full"
                width={16}
                height={16}
                src="/mi.svg"
                alt="mi-life icon"
              />

              <img
                className="w-10 h-10 rounded-full"
                width={16}
                height={16}
                src="/a.svg"
                alt="allianz icon"
              />

              <span className="w-10 !ml-1">&{"\u00A0"}more</span>
            </div>
            <div className="divider"></div>
          </div>
          <div className="why-grid-items">
            <div className="flex place-content-center md:place-content-start">
              <img
                width={16}
                height={16}
                className="w-[49px]"
                src="/under.svg"
                alt="smart icon"
              />
            </div>
            <div className="ajy-heading-6 primary-solid-fg pad-1rem why-head">
              extensive report, no hidden details
            </div>
            <div className="ajy-body-1">
              Our commitment to providing thorough and comprehensive reports to
              our customers implies that we offer detailed information about
              insurance coverage, terms and conditions, claims processes, and
              any other relevant information.
            </div>

            <div className="instant-insure">
              <span>
                <img
                  width={16}
                  height={16}
                  className="w-[37px]"
                  src="/surface1.png"
                  alt=""
                />
              </span>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="contact px-4 md:px-[5%]">
        <div className="flex place-content-between w-full items-center flex-col md:flex-row ">
          <div className="flex-[2]">
            <div className="text-center head-2 md:text-left">
              Ready to get started?
            </div>
            <div className="head c-head text-center md:!text-left">
              Get in touch or create a free account.
            </div>
          </div>
          <div className="flex flex-col lg:flex-row flex-[1]">
            <Link
              href="/contact"
              className="button-3 flex place-content-center place-items-center but space-btn hover:drop-shadow !bg-[#F7E6E6] !text-[#B00D0C] rounded-full py-2 px-10 w-full"
            >
              Contanct Us
            </Link>
            <Link
              className="w-full"
              href="https://smart-insurance-uat.web.app/login"
            >
              <button className="button-3 hover:drop-shadow but rounded-full py-2 px-10 text-white bg-[#B00D0C] w-full">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
