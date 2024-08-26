const TeamProfile = () => {
  return (
    <section
      className="lg:mx-28 lg:my-0 my-20 flex flex-col justify-center"
      id="team"
    >
      <div className="flex justify-between lg:mb-32 mb-20 lg:mx-0 mx-10">
        <h1>Our Team</h1>
        {/* <div className="flex gap-3">
          <button className="border-4 border-primary-500 text-primary-500 text-5xl h-16 w-16 flex justify-center items-center rounded-full">
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          <button className="bg-primary-500 text-bgbase text-5xl h-16 w-16 flex justify-center items-center rounded-full">
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div> */}
      </div>
      <div className="lg:flex gap-5">
        <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-10 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
          <div className="flex flex-col items-center">
            <div className="lg:-mt-24">
              <img
                src="/images/profile1.jpeg"
                alt="person photo"
                className="shadow-lg rounded-full w-48"
              />
            </div>
            <h4>Jay Chen</h4>
            <span className="font-semibold text-center">CEO</span>
            <div className="italic text-center mt-2 text-xs">
              Jay began his career in the banking and finance sector, where he
              honed his skills and developed a deep understanding of the
              industry. Leveraging this foundation, he expanded into HR
              operations and outsourcing, successfully growing his businesses by
              delivering exceptional service to renowned international brands
              such as Citibank, Coca-cola, and Humanica. CO2 Labs provides a
              solutions based approach to champion human resource and
              outsourcing through strategic consultation and meticulously
              planned placements.
            </div>
          </div>
        </div>
        <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-10 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
          <div className="flex flex-col items-center">
            <div className="lg:-mt-24">
              <img
                src="/images/profile2.jpeg"
                alt="person photo"
                className="shadow-lg rounded-full w-48"
              />
            </div>
            <h4>Alune</h4>
            <span className="font-semibold text-center">Development Project Manager</span>
            <div className="italic text-center mt-2 text-xs">
              With a background in IT software development, quality testing and
              web design, she brings a deep understanding of the technical and
              strategic aspects of project management. Known for her meticulous
              planning, effective communication, and ability to navigate
              challenges, she has consistently delivered high-quality software
              solutions on time and within budget. Alune excels at fostering
              collaboration across cross-functional teams, ensuring that
              projects align with client objectives and business goals. Her
              dedication to excellence and passion for innovation make her a
              driving force behind the success of every project she leads.
            </div>
          </div>
        </div>
        <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-10 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
          <div className="flex flex-col items-center">
            <div className="lg:-mt-24">
              <img
                src="/images/profile3.jpeg"
                alt="person photo"
                className="shadow-lg rounded-full w-48"
              />
            </div>
            <h4>Ron</h4>
            <span className="font-semibold text-center">Business Development Lead</span>
            <div className="italic text-center mt-2 text-xs">
              With a strong background in business development for finance,
              logistics and real estate industries, Ron has successfully led
              initiatives that have expanded market reach and increased revenue
              for both emerging and established companies. Known for his ability
              to identify new opportunities and forge lasting relationships, Ron
              excels in creating tailored solutions that meet client needs and
              align with business goals through thoughtful solutioning.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamProfile;
