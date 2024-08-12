// eslint-disable-next-line react/prop-types
const Advantages = ({title, desc}) => {
  return (
    <div className="items mb-5">
      <div className="flex items-center gap-10 mb-4">
        <div className="rounded-full sm:-ml-2 -ml-1 bg-accent-500 sm:w-5 w-1 sm:h-5 h-1 sm:p-0 p-2"></div>
        <h3>{title}</h3>
      </div>
      <div className="flex gap-10">
        <div className="bg-accent-500 w-1"></div>
        <div className="bg-white shadow-xl p-5 rounded-lg">
            {desc}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
