// eslint-disable-next-line react/prop-types
const Introsec = ({ image = "", desc }) => {
  return (
    <section className="bg-primary-500 lg:px-28 px-10 lg:h-screen flex flex-col justify-center gap-5 lg:py-0 py-10">
      <div className="">
        <h1
          className="text-primary-300 sm:text-9xl text-8xl"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-anchor-placement="bottom-bottom"
        >
          C02
        </h1>
        <h1
          className="text-bgbase sm:-mt-14 -mt-12 ml-2 sm:text-5xl text-4xl"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-anchor-placement="bottom-bottom"
        >
          C02 LABS
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center py-10">
        <div className="bg-custom-gradient rounded-lg flex items-end justify-center md:w-[500px] w-full px-20 py-10">
          <img
            src={`/images/${image}.png`}
            alt="intro img"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-anchor-placement="bottom-bottom"
          />
        </div>
        <h6
          className="lg:text-end lg:w-1/2 text-center text-bgbase"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-anchor-placement="bottom-bottom"
        >
          {desc}
        </h6>
      </div>
    </section>
  );
};

export default Introsec;
