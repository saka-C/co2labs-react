const Portfolio = () => {
  return (
    <section className="bg-primary-500 lg:px-28 px-10 py-20 mt-20 text-bgbase" id="portfolio">
      <h1 className="mb-10">Our Portfolio</h1>
      <div className="flex flex-wrap  justify-center gap-8">
        <div className="md:w-64 w-96">
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-none"
            href="https://aotc.sg/"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src="/images/portfolio.png"
                alt=""
              />
            </div>
            <h5 className="mt-3">AOTC Cosmetics</h5>
          </a>
        </div>

        <div className="md:w-64 w-96">
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-none"
            href="https://noshkitchen.com.sg"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src="/images/portfolio-1.png"
                alt=""
              />
            </div>
            <h5 className="mt-3">Nosh kitchen Website</h5>
          </a>
        </div>

        <div className="md:w-64 w-96">
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-none"
            href="https://micelah.com"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src="/images/portfolio-2.png"
                alt=""
              />
            </div>
            <h5 className="mt-3">Michelah Event Organizer Singapore</h5>
          </a>
        </div>

        <div className="md:w-64 w-96">
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-none"
            href="https://pianistprodigy.com/"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src="/images/portfolio-3.png"
                alt=""
              />
            </div>
            <h5 className="mt-3">Joywaltzstudio Academy</h5>
          </a>
        </div>
        
        <div className="md:w-64 w-96">
          <a
            className="group relative block rounded-xl overflow-hidden focus:outline-none"
            href="https://octopay.asia/"
          >
            <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
              <img
                className=" group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                src="/images/portfolio-4.png"
                alt=""
              />
            </div>
            <h5 className="mt-3">Octopay Payment</h5>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
