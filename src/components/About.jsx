
import TeamProfile from "./TeamProfile";

const About = () => {
  return (
    <>
      <section className="lg:h-screen flex items-center mb-40" id="about">
        <div className="lg:flex lg:mx-28 mx-10 gap-20 lg:mt-0 mt-20">
          <div className="lg:text-right flex flex-col lg:items-end items-center justify-center lg:w-1/2 lg:gap-11 gap-5">
            <h1
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-anchor-placement="bottom-bottom"
            >
              About Us
            </h1>
            <h6
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-anchor-placement="bottom-bottom"
            >
              At CO2 Labs, we strive to provide simple yet powerful software
              solutions and expert consultation to help your business thrive in
              the digital world.
            </h6>
            <div
              className="line-wave"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-anchor-placement="bottom-bottom"
            >
              <svg
                className="xl:w-[600px] w-full"
                height="81"
                viewBox="0 0 710 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10"
                  stroke="#EDEAE3"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="flex justify-center items-center lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
          >
            <img src="/images/about-img.png" alt="About img" className="rounded-xl"/>
          </div>
        </div>
      </section>
      <TeamProfile />
    </>
  );
};
export default About;
