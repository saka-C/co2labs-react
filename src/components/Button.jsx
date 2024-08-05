/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Button = ({ text, className = '' }) => {
  return (
    <button className={`bg-primary-500 rounded-md py-2 px-4 font-medium font-generalsans shadow-custom-drop text-bgbase ${className}`}>
      {text}
    </button>
  );
};
export default Button;
