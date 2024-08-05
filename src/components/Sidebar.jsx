// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Menu } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import Button from './Button'


// eslint-disable-next-line react/prop-types
const Sidebar = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
          <button onClick={toggleSidebar} className="my-2 text-dark-300 text-[50px]">
            <i className='bx bx-x'></i>
          </button>
          <nav>
            <Menu as="div">
              <h5 className='bg-gray-100 p-3 mb-2 rounded-lg hover:underline'>Our Services</h5>
              <ul className='list-disc leading-8'>
                <li className='ml-5 my-3 underline'><a href="#">Website Maintenance</a></li>
                <li className='ml-5 my-3 underline'><a href="#">Website Development</a></li>
                <li className='ml-5 my-3 underline'><a href="#">App Development</a></li>
                <li className='ml-5 my-3 underline'><a href="#">3rd Party AI Solution</a></li>
              </ul>
              <h5 className='bg-gray-100 p-3 mb-2 rounded-lg hover:underline'><a href="#">About Us</a></h5>
              <h5 className='bg-gray-100 p-3 mb-2 rounded-lg hover:underline'><a href="#">Portfolio</a></h5>
              <h5 className='bg-gray-100 p-3 mb-2 rounded-lg hover:underline'><a href="#">Contact Us</a></h5>
            </Menu>
            <Button text="Get Started Today!" className='text-black w-full py-3 mt-5'/>
          </nav>
        </aside>
      </Transition>
    </div>
  );
};

export default Sidebar;
