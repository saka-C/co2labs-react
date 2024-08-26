// eslint-disable-next-line react/prop-types
const Cta = ({ image = "", desc, gototext }) => {
  const whatsappClick = () => {
    const phoneNumber = '6581181595'; // Ganti dengan nomor WhatsApp kamu
    const message = 'Hi Co2, I would like ask about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  };
  return (
    <section className="lg:mx-28 mx-10 md:h-screen flex items-center md:my-0 my-20">
      <div className="md:flex items-center">
        <div className="lg:h-96 bg-secondary-500 lg:mr-14 mr-10 lg:w-5"></div>
        <div className="lg:flex md:flex-row rounded-xl shadow-xl flex flex-col items-center">
          <img
            src={`/images/${image}.png`}
            alt="ctaimg"
            className="object-cover md:w-96 h-96 w-full md:rounded-s-xl md:rounded-e-none rounded-t-xl"
          />
          <div className="flex flex-col gap-5 xl:px-20 lg:px-10 md::p-0 p-10">
            <h3>We’re Here For You</h3>
            <h6 className="lg:text-xl text-base">
              {desc}
            </h6>
            <button onClick={whatsappClick} className="flex items-center self-start bg-yel text-black rounded-md py-2 px-4 font-medium font-generalsans shadow-custom-drop">
              {gototext}<i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cta;
