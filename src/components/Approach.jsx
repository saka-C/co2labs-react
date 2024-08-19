const Approach = () => {
  return (
    <section className="xl:h-screen h-full flex flex-col items-center gap-10 mt-20" id="approach">
      <h1 className="">ACE</h1>
      <h4 className="-mt-10 text-center">Methodology for Strategic Consulting</h4>
      <div className="w-full">
        <div className="parent cursor-pointer lg:inline-block lg:w-1/3 bg-secondary-500 p-10 group align-top transition duration-300 ease-in-out">
          <h3>Assessment</h3>
          <h6>& Insight Gathering</h6>
          <div className="group-hover:block mt-2 hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="my-5">
              <span>
                Our process begins with an initial consultation to gather
                insights into your business needs and challenges. We work
                closely with your team to understand your objectives and gather
                all necessary information.
              </span>
            </div>
            <ul className="list-disc ml-5 leading-8">
              <li>Initial consultation meetings</li>
              <li>Gathering business and technical requirements</li>
              <li>Conducting stakeholder interviews</li>
              <li>Understanding long-term business goals</li>
            </ul>
          </div>
          <div className="flex justify-center mt-5">
            <svg
              className="transform transition-transform duration-300 ease-in-out group-hover:rotate-0 rotate-180 arrow-icon"
              width="59"
              height="23"
              viewBox="0 0 59 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56 20L29.5 3L3 20"
                stroke="#ADB8BA"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="parent cursor-pointer lg:inline-block lg:w-1/3 bg-accent-500 p-10 group align-top transition duration-300 ease-in-out">
          <h3>Customization</h3>
          <h6>& Strategic Planning</h6>
          <div className="group-hover:block mt-2 hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="my-5">
              <span>
              We then develop a strategic plan and design tailored solutions that address your specific needs. This involves detailed planning, resource allocation, and design of bespoke solutions that align with your goals.
              </span>
            </div>
            <ul className="list-disc ml-5 leading-8">
              <li>Strategic planning sessions</li>
              <li>Solution design and prototyping</li>
              <li>Resource and timeline planning</li>
              <li>Risk assessment and mitigation planning</li>
            </ul>
          </div>
          <div className="flex justify-center mt-5">
            <svg
              className="transform transition-transform duration-300 ease-in-out group-hover:rotate-0 rotate-180 arrow-icon"
              width="59"
              height="23"
              viewBox="0 0 59 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56 20L29.5 3L3 20"
                stroke="#EDEAE3"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="parent cursor-pointer lg:inline-block lg:w-1/3 bg-secondary-500 p-10 group align-top transition duration-300 ease-in-out">
          <h3>Execution</h3>
          <h6>& Lifecycle Management</h6>
          <div className="group-hover:block mt-2 hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="my-5">
              <span>
              We execute the strategic plan and manage the entire solution lifecycle, from implementation to optimization. This ensures the solutions are effectively integrated and continuously deliver value.
              </span>
            </div>
            <ul className="list-disc ml-5 leading-8">
              <li>Implementation of the strategic plan</li>
              <li>Solution deployment and integration</li>
              <li>Lifecycle management and support</li>
              <li>Continuous performance evaluation and optimization</li>
            </ul>
          </div>
          <div className="flex justify-center mt-5">
            <svg
              className="transform transition-transform duration-300 ease-in-out group-hover:rotate-0 rotate-180 arrow-icon"
              width="59"
              height="23"
              viewBox="0 0 59 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56 20L29.5 3L3 20"
                stroke="#ADB8BA"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
