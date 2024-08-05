import { useState, useEffect } from 'react';
import Button from "./Button";
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import useWindowSize from "./UseWindowsize";

const Navbar = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 1024;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex items-center justify-between top-0 z-20 lg:px-28 px-10 py-2 fixed w-screen transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-custom-drop' : 'bg-transparent'}`}>
      <div className="order-1">
        <img src="/images/logo.png" alt="logo" className='w-20'/>
      </div>
      <ul className="order-2 lg:flex gap-10 hidden">
        <li className="relative group">
          <a href=''
            className="font-generalsans font-medium text-xl flex items-center"
          >
            Our Services
            <i className="bx bx-chevron-down ml-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-180 arrow-icon"></i>
          </a>
          <div className="absolute left-0  bg-white border-gray-200 border-[1px] shadow-custom-drop rounded-lg hidden opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out">
            <ul className="drop p-2">
              <li>
                <Link
                  to="/service/web-main"
                  className="flex items-center gap-5 w-[400px] p-2 text-gray-700 hover:bg-gray-50"
                >
                  <div className="bg-accent-100 w-16 h-16 rounded-md flex justify-center items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7383 0.66243C14.1535 0.66243 12.6758 1.70245 12.2147 3.16495L1.98828 3.16243C1.29791 3.16243 0.738281 3.72243 0.738281 4.41243C0.738281 5.10243 1.29791 5.66243 1.98828 5.66243L12.2147 5.66121C12.7748 7.19246 14.1535 8.16243 15.7383 8.16243C17.323 8.16243 18.7159 7.18996 19.2858 5.65121L21.9883 5.66243C22.6787 5.66243 23.2383 5.10243 23.2383 4.41243C23.2383 3.72243 22.6787 3.16243 21.9883 3.16243H19.2752C18.6733 1.63868 17.323 0.66243 15.7383 0.66243ZM15.7383 3.16243C16.4287 3.16243 16.9883 3.72243 16.9883 4.41243C16.9883 5.10243 16.4287 5.66243 15.7383 5.66243C15.0479 5.66243 14.4883 5.10243 14.4883 4.41243C14.4883 3.72243 15.0479 3.16243 15.7383 3.16243ZM8.23828 8.16243C6.59078 8.16243 5.21178 9.18745 4.70828 10.6649C4.53253 10.6762 1.98828 10.6624 1.98828 10.6624C1.29791 10.6624 0.738281 11.2224 0.738281 11.9124C0.738281 12.6024 1.29791 13.1624 1.98828 13.1624C1.98828 13.1624 4.55378 13.1362 4.71366 13.1524C5.21716 14.6299 6.59078 15.6624 8.23828 15.6624C9.82303 15.6624 11.181 14.6912 11.775 13.1662L21.9883 13.1624C22.6787 13.1624 23.2383 12.6024 23.2383 11.9124C23.2383 11.2224 22.6787 10.6624 21.9883 10.6624L11.7685 10.6512C11.2207 9.15996 9.82303 8.16243 8.23828 8.16243ZM8.23828 10.6624C8.92866 10.6624 9.48828 11.2224 9.48828 11.9124C9.48828 12.6024 8.92866 13.1624 8.23828 13.1624C7.54791 13.1624 6.98828 12.6024 6.98828 11.9124C6.98828 11.2224 7.54791 10.6624 8.23828 10.6624ZM15.7383 15.6624C14.1535 15.6624 12.7039 16.7062 12.2138 18.1499L1.98828 18.1624C1.29791 18.1624 0.738281 18.7224 0.738281 19.4124C0.738281 20.1024 1.29791 20.6624 1.98828 20.6624L12.1953 20.6637C12.7139 22.1449 14.1535 23.1624 15.7383 23.1624C17.323 23.1624 18.6894 22.1712 19.2914 20.6637L21.9883 20.6624C22.6787 20.6624 23.2383 20.1024 23.2383 19.4124C23.2383 18.7224 22.6787 18.1624 21.9883 18.1624L19.28 18.155C18.7404 16.6762 17.323 15.6624 15.7383 15.6624ZM15.7383 18.1624C16.4287 18.1624 16.9883 18.7224 16.9883 19.4124C16.9883 20.1024 16.4287 20.6624 15.7383 20.6624C15.0479 20.6624 14.4883 20.1024 14.4883 19.4124C14.4883 18.7224 15.0479 18.1624 15.7383 18.1624Z"
                        fill="#FE6454"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h5>Website Maintenance</h5>
                    <p className="font-generalsans font-medium text-xs w-60">
                      Keep your website running smoothly and securely{" "}
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/service/web-dev"
                  className="flex items-center gap-5  w-[400px] p-2 text-gray-700 hover:bg-gray-50"
                >
                  <div className="bg-secondary-100 w-16 h-16 rounded-md flex justify-center items-center">
                    <svg
                      width="26"
                      height="21"
                      viewBox="0 0 26 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8838 1.03578C15.22 0.847035 14.511 1.23077 14.3213 1.89577L9.32127 19.3958C9.13164 20.0595 9.51689 20.7683 10.1808 20.9583C10.8445 21.147 11.5535 20.7633 11.7433 20.0983L16.7433 2.59828C16.9329 1.93453 16.5476 1.22578 15.8838 1.03578ZM6.54789 2.28578C6.23414 2.34828 5.91902 2.50701 5.72752 2.79451L0.72752 10.2945C0.47877 10.667 0.448894 11.1433 0.649519 11.5445L4.39952 19.0445C4.70814 19.6608 5.46164 19.9383 6.07914 19.6295C6.69664 19.3208 6.97377 18.567 6.66502 17.9495L3.22752 11.1145L7.83702 4.19954C8.21989 3.62579 8.05977 2.82578 7.48539 2.44203C7.19814 2.25078 6.86164 2.22328 6.54789 2.28578ZM20.9229 2.32454C20.6194 2.22454 20.2941 2.20952 19.9854 2.36452C19.3679 2.67327 19.0908 3.42701 19.3995 4.04451L22.837 10.8795L18.2275 17.7945C17.8446 18.3683 18.0048 19.1683 18.5791 19.552C19.1535 19.9345 19.954 19.7745 20.337 19.1995L25.337 11.6995C25.5858 11.327 25.6156 10.8508 25.415 10.4495L21.665 2.94954C21.5108 2.64204 21.2264 2.42704 20.9229 2.32454Z"
                        fill="#F0D724"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h5>Website Development</h5>
                    <p className="font-generalsans font-medium text-xs w-60">
                      Transform your online presence with our custom website
                      design solutions.{" "}
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/service/app-dev"
                  className="flex items-center gap-5  w-[400px] p-2 text-gray-700 hover:bg-gray-50"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-md flex justify-center items-center">
                    <svg
                      width="18"
                      height="30"
                      viewBox="0 0 18 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 3.75C0 2.75544 0.379284 1.80161 1.05442 1.09835C1.72955 0.395088 2.64522 0 3.6 0L14.4 0C15.3548 0 16.2705 0.395088 16.9456 1.09835C17.6207 1.80161 18 2.75544 18 3.75V26.25C18 27.2446 17.6207 28.1984 16.9456 28.9016C16.2705 29.6049 15.3548 30 14.4 30H3.6C2.64522 30 1.72955 29.6049 1.05442 28.9016C0.379284 28.1984 0 27.2446 0 26.25V3.75ZM10.8 24.375C10.8 23.8777 10.6104 23.4008 10.2728 23.0492C9.93523 22.6975 9.47739 22.5 9 22.5C8.52261 22.5 8.06477 22.6975 7.72721 23.0492C7.38964 23.4008 7.2 23.8777 7.2 24.375C7.2 24.8723 7.38964 25.3492 7.72721 25.7008C8.06477 26.0525 8.52261 26.25 9 26.25C9.47739 26.25 9.93523 26.0525 10.2728 25.7008C10.6104 25.3492 10.8 24.8723 10.8 24.375Z"
                        fill="#83E1B5"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h5>App Development</h5>
                    <p className="font-generalsans font-medium text-xs w-60">
                      Bring your app idea to life with our expert development
                      team.{" "}
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/service/ai-solution"
                  className="flex items-center gap-5  w-[400px] p-2 text-gray-700 hover:bg-gray-50"
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-md flex justify-center items-center">
                    <svg
                      width="24"
                      height="30"
                      viewBox="0 0 24 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C10.744 0 9.49392 0.59864 8.57292 1.78241L1.24853 11.206C-0.416176 13.3425 -0.416176 16.6643 1.24853 18.8007L8.57292 28.2243C10.4164 30.5919 13.5836 30.5919 15.4271 28.2243L22.7515 18.8007C24.4162 16.6643 24.4162 13.3425 22.7515 11.206L15.4271 1.78241C14.5061 0.59864 13.256 0 12 0Z"
                        fill="#E964FF"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h5>3rd Party AI Solution </h5>
                    <p className="font-generalsans font-medium text-xs w-60">
                      Leverage our expertise to find the best third-party
                      services for your business.{" "}
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href='#' className="font-generalsans font-medium text-xl">
            About Us
          </a>
        </li>
        <li>
          <a href='#' className="font-generalsans font-medium text-xl">
            Portfolio
          </a>
        </li>
        <li>
          <a href='#' className="font-generalsans font-medium text-xl">
            Contact Us
          </a>
        </li>
      </ul>
      <Button className="order-3 md:block hidden hover:scale-110 transition-all hover:shadow-primary-600 hover:shadow-md" text="Get Started Today!" />
      {isMobile && <Sidebar />}
    </nav>
  );
};

export default Navbar;
