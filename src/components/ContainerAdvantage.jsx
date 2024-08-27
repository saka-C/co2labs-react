import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const ContainerAdvantage = ({children}) => {
  return (
    <section className="mt-20 mb-10 lg:mx-28 mx-10">
      <div className="m-auto">
        <div className="flex justify-center items-start">
          <div className="lg:block hidden col col-left">
            <h2>
              OUR
              <br />
              ADVANTAGES
            </h2>
          </div>

          <div className="lg:col lg:col-right">
            <div className="mb-10 flex gap-2 lg:hidden">
              <div className="bg-primary-500 w-2"></div>
              <h2>OUR ADVANTAGES</h2>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
    );
};
export default ContainerAdvantage;