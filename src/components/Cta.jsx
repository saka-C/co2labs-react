const Cta = () => {
  return (
    <section className="lg:mx-28 mx-10 h-screen flex items-center">
      <div className="flex items-center">
        <div className="h-96 bg-secondary-500 mr-20 w-10"></div>
        <div className="rounded-lg shadow-xl flex items-center">
          <img src="/images/cta1.png" alt="" className="object-cover w-96 h-96 rounded-s-xl" />
          <div className="flex flex-col gap-5 xl:px-20 lg:px-10">
            <h3>We’re Here For You</h3>
            <h6>
              Partner with CO2 Labs for reliable website maintenance and enjoy
              peace of mind knowing your site is in expert hands. Contact us today
              to learn more about our services.
            </h6>
            <button className="flex items-center self-start bg-yellow text-black rounded-md py-2 px-4 font-medium font-generalsans shadow-custom-drop">Get a Free Quote <i class='bx bx-right-arrow-alt'></i></button>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Cta;
