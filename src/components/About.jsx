import Approach from "./Approach";
import TeamProfile from "./TeamProfile";

const About = () => {
  return (
    <>
      <div className="wave top-0 rotate-180"></div>
      <section className="h-full flex items-center mb-40">
        <div className="lg:flex lg:mx-28 mx-10 gap-20">
          <div className="lg:text-right flex flex-col lg:items-end items-center justify-center lg:w-1/2 gap-11">
            <h1 data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out">About Us</h1>
            <h6 data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-out">
              At CO2 Labs, we strive to provide simple yet powerful software
              solutions and expert consultation to help your business thrive in
              the digital world.
            </h6>
            <div className="line-wave" data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out">
              <svg
                className="xl:w-[600px] w-full"
                height="81"
                viewBox="0 0 710 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10"
                  stroke="#F3E26B"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/2" data-aos="fade-up" data-aos-delay="1500" data-aos-easing="ease-in-out">
            <img src="/images/about-img.png" alt="About img" />
          </div>
        </div>
      </section>
      <Approach />
      <TeamProfile />
    </>
  );
};
export default About;
