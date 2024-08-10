// eslint-disable-next-line react/prop-types
const Introsec = ({ image = "", desc }) => {
  return (
    <section className="bg-primary-500 lg:px-28 px-10 h-screen flex flex-col justify-center gap-5">
      <div className="">
        <h1 className="text-primary-300 text-9xl">C02</h1>
        <h1 className="text-bgbase -mt-16 ml-2">C02 LABS</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-custom-gradient rounded-lg flex items-end justify-center w-[500px] px-20 py-10">
          <img src={`/images/${image}.png`} alt="intro img" />
        </div>
        <h6 className="text-end w-1/2 text-bgbase">{desc}</h6>
      </div>
    </section>
  );
};

export default Introsec;
