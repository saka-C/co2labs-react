import { useEffect } from 'react';

const SmoothScrollNav = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      const href = e.currentTarget.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        const offset = 60; // Adjust this value to match the height of your navigation

        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      } else {
        console.error(`Target element ${href} not found.`);
      }
    };

    const anchors = document.querySelectorAll('nav a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return null;
};

export default SmoothScrollNav;
