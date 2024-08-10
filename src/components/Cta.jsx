import Button from "./Button";

const Cta = () => {
  return (
    <section className="lg:mx-28 mx-10 h-screen">
      <div className="h-auto bg-secondary-500 mr-20"></div>
      <div className="rounded-lg shadow-xl flex items-center">
        <img src="/images/cta1.png" alt="" className="object-cover w-96 h-96 rounded-s-xl" />
        <div className="">
          <h3>We’re Here For You</h3>
          <h6>
            Partner with CO2 Labs for reliable website maintenance and enjoy
            peace of mind knowing your site is in expert hands. Contact us today
            to learn more about our services.
          </h6>
          <Button text="Get a Free Quote" />
        </div>
      </div>
    </section>
  );
};
export default Cta;
