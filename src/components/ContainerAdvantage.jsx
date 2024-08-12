import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const ContainerAdvantage = ({children}) => {
  const sectionRef = useRef(null);
  const colLeftRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const colLeft = colLeftRef.current;

    const timeln = gsap.timeline({ paused: true });

    timeln.fromTo(
      colLeft,
      { y: 80 },
      { y: "150vh", duration: 1, ease: "none" },
      0
    );

    ScrollTrigger.create({
      animation: timeln,
      trigger: section,
      start: "top top",
      end: "bottom center",
      scrub: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="lg:h-[150vh] mt-20 mb-10 lg:mx-28 mx-10">
      <div className="m-auto">
        <div className="flex justify-center items-start">
          <div ref={colLeftRef} className="lg:block hidden col col-left">
            <h2>
              OUR
              <br />
              ADVANTAGES
            </h2>
          </div>

          <div className="lg:col lg:col-right">
            <div className="mb-10 flex gap-2 lg:hidden block">
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