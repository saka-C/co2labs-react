// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div>
      <button onClick={toggleSidebar} className={`p-4 ${className}`}>
        <FaBars size={24} />
      </button>

      <Transition
        show={isOpen}
        enter="transition-transform duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <aside className="fixed inset-y-0 left-0 top-0 w-80 bg-base shadow-custom-drop text-dark-600 p-4 z-50 clearfix">
          <button
            onClick={toggleSidebar}
            className="my-2 text-dark-300 text-[50px]"
          >
            <i className="bx bx-x"></i>
          </button>
          <nav>
            <Menu as="div">
              <button
                className="bg-gray-100 p-3 mb-2 rounded-lg w-full text-start hover:underline"
                onClick={() => handleNavigation("service")}
              >
                Our Services
              </button>
              <ul className="list-disc leading-8">
                <li className="ml-5 my-3 underline">
                  <a href="/service/web-main">Website Maintenance</a>
                </li>
                <li className="ml-5 my-3 underline">
                  <a href="/service/web-dev">Website & App Development</a>
                </li>
                <li className="ml-5 my-3 underline">
                  <a href="/service/it-support">IT Support</a>
                </li>
                <li className="ml-5 my-3 underline">
                  <a href="/service/ai-solution">3rd Party AI Solution</a>
                </li>
              </ul>
              <button
                className="bg-gray-100 p-3 mb-2 rounded-lg w-full text-start hover:underline"
                onClick={() => handleNavigation("about")}
              >
                About Us
              </button>
              <button
                className="bg-gray-100 p-3 mb-2 rounded-lg w-full text-start hover:underline"
                onClick={() => handleNavigation("portfolio")}
              >
                Portfolio
              </button>
              <button
                className="bg-gray-100 p-3 mb-2 rounded-lg w-full text-start hover:underline"
                onClick={() => handleNavigation("contact")}
              >
                Contact Us
              </button>
            </Menu>
            <Button
              text="Get Started Today!"
              className="text-bgbase w-full py-3 mt-5"
            />
          </nav>
        </aside>
      </Transition>
    </div>
  );
};

export default Sidebar;
