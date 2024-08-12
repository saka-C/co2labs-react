import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
const Headerpages = ({ image = "", title, desc }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <header className="h-screen flex justify-between items-center lg:mb-0 mb-20">
        <div className="lg:ml-28 ml-10 w-full">
          <div className="lg:flex items-center justify-between box-border lg:w-2/3">
            <div className="lg:order-2 flex justify-end items-center ">
              <img
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src={`/images/${image}.png`}
                className="lg:w-96 sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md"
              />
              <img
                src="/images/backdrop.png"
                className="-z-10 lg:w-[400px] sm:w-1/2 w-2/3 lg:absolute right-0"
              />
            </div>
            <div className="lg:w-2/3 lg:mr-0 mr-10 lg:order-1   ">
              <div className="com -mb-11 -ml-11"></div>
              <h1
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-easing="ease-in-sine"
                className="sm:text-5xl text-3xl"
              >
                {title}
              </h1>
              <h6
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className="my-5"
              >
                “{desc}”
              </h6>
              <div className="bg-black h-1 w-40"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headerpages;
