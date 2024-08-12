import Button from "./Button";
import Linkcomp from "./Linkcomp";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <header className="h-screen flex justify-between items-center">
        <div className="lg:ml-28 ml-10 w-full">
          <div className="lg:flex items-center justify-between box-border lg:w-2/3">
            <div className="lg:order-2 flex justify-end items-center ">
              <img src="/images/heroimg.png" className="lg:w-96 sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md" />
              <img src="/images/backdrop.png" className="-z-10 lg:w-[400px] sm:w-1/2 w-2/3 lg:absolute right-0"/>
            </div>
            <div className="lg:w-2/3 lg:mr-0 mr-10 lg:order-1">
              <h1
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="sm:text-5xl text-3xl"
              >
                Where Code Meets{" "}
                <span className="font-orbitron font-bold sm:text-5xl text-3xl  bg-primary-500 text-bgbase">
                  Creativity
                </span>
              </h1>
              <h6
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                className="my-5"
              >
                Harnessing the power of our Coding Collective to build solutions
                for your business needs.
              </h6>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="flex gap-8 items-center"
              >
                <Button
                  className="hover:scale-110 transition-all hover:shadow-primary-600 hover:shadow-md"
                  text="Get Started Today"
                />
                <Linkcomp href="#" text="Request a Consultation" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
