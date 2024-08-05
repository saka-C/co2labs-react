// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Linkcomp = ({ href, text}) => {
  return (
    <a href={href} className="font-generalsans font-semibold text-base hover:text-blue-900 underline text-black">
      {text}
    </a>
  );
};

Linkcomp.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default Linkcomp;
