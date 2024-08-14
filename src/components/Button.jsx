/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Button = ({ text, className = '', onClick }) => {
  return (
    <button
      className={`bg-primary-500 rounded-md py-2 px-4 font-medium font-generalsans shadow-custom-drop text-bgbase ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
