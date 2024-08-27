import { useNavigate, useLocation } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          .scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappClick = () => {
    const phoneNumber = "6581181595"; // Ganti dengan nomor WhatsApp kamu
    const message = "Hi Co2, I would like ask about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = url;
  };
  return (
    <footer className="bg-dark-700 lg:px-28 px-10 text-white pt-20 pb-10">
      <div className="lg:flex lg:justify-between">
        <div className="flex flex-col justify-between">
          <h3>Let’s Grow With CO2 Labs</h3>
          <div className="flex flex-col gap-5">
            <h5>Get Exclusive Updates From Us</h5>
            <form action="mailto:shaka.aufa.alhajar@gmail.com" method="post" encType="text/plain" className="flex">
              <input
                type="text"
                placeholder="Yourmail@example.com"
                className="py-2 px-5 sm:w-auto w-full rounded-l-full text-black"
              />
              <button type="submit" className="bg-yel py-2 px-5 rounded-r-full font-semibold text-black">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex xl:ml-0 lg:ml-10 flex-wrap gap-8 lg:mt-0 mt-20">
          <ul>
            <h6>Services</h6>
            <li>
              <a href="/service/web-main">Web Maintenance</a>
            </li>
            <li>
              <a href="/service/web-dev">Web & App Development</a>
            </li>
            <li>
              <a href="/service/it-support">IT Service</a>
            </li>
            <li>
              <a href="/service/ai-solution">3rd Party AI Solution</a>
            </li>
          </ul>
          <ul>
            <h6>About</h6>
            <li>
              <button onClick={() => handleNavigation("approach")}>
                Our Approach
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("team")}>Our Team</button>
            </li>
            <li>
              <button onClick={() => handleNavigation("portfolio")}>
                Our Portfolio
              </button>
            </li>
          </ul>
          <ul>
            <h6>Contact</h6>
            <li>
              <button onClick={whatsappClick} className="flex items-center">
                <i className="bx bxs-phone text-2xl mr-2"></i>+65-8118-1595
              </button>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <i className="bx bxl-gmail text-2xl mr-2"></i>info@co2labs.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A"
                className="flex items-center"
              >
                <i className="bx bx-map-alt text-2xl mr-2"></i>100D Pasir Panjang Road{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-10 bot">
        <span>©2024 CO2 Labs. All Right Reserved</span>
        <div className="flex gap-10">
          <a href="/faq">FAQ</a>
          <a href="/termspolicy">Terms & Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
