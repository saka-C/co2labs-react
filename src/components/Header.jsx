import Button from "./Button";
import Linkcomp from "./Linkcomp";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <header className="h-screen">
        <div className="lg:mx-28 mx-10">
          <div className="lg:flex items-center justify-between mt-28">
            <div className="lg:order-2 backdrop w-full h-screen bg-no-repeat bg-center bg-[length:200px_200px] ">

            </div>
            <div className="lg:w-2/4 lg:order-1">
              <h1
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Where Code Meets{" "}
                <span className="font-orbitron font-bold text-5xl bg-primary-500 text-bgbase">
                  Creativity
                </span>
              </h1>
              <h6
                data-aos="fade-right"
                data-aos-offset="300"
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

export default HeaderHome;
