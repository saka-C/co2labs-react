const Footer = () => {
  return (
    <footer className="bg-dark-700 lg:px-28 px-10 text-white pt-20 pb-10">
      <div className="lg:flex lg:justify-between">
        <div className="flex flex-col justify-between">
          <h3>Let’s Grow With CO2 Labs</h3>
          <div className="flex flex-col gap-5">
            <h5>Get exclusive Update From Us</h5>
            <div className="flex">
              <input
                type="text"
                placeholder="Yourmail@example.com"
                className="py-2 px-5 sm:w-auto w-full rounded-l-full"
              />
              <button className="bg-yellow py-2 px-5 rounded-r-full font-semibold text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex xl:ml-0 lg:ml-10 flex-wrap gap-8 lg:mt-0 mt-20">
          <ul>
            <h6>Services</h6>
            <li>
              <a href="#">Web Maintenance</a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">App Development</a>
            </li>
            <li>
              <a href="#">IT Service</a>
            </li>
            <li>
              <a href="#">3rd Party AI Solution</a>
            </li>
          </ul>
          <ul>
            <h6>About</h6>
            <li>
              <a href="#">Our Approach</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
          <ul>
            <h6>Contact</h6>
            <li>
              <a href="#" className="flex items-center">
                <i className="bx bxs-phone text-2xl"></i>081-123-456
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <i className="bx bxl-instagram text-2xl"></i>@co2labs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <i className="bx bx-map-alt text-2xl"></i>Coding Collective SG{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-10 bot">
        <span>©2024 CO2 Labs. All Right Reserved</span>
        <div className="flex gap-10">
            <span>FAQ</span>
            <span>Terms & Policy</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
