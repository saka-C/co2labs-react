const TeamProfile = () => {
  return (
    <section className="lg:mx-28 lg:my-0 my-20 flex flex-col justify-center" id="team">
      <div className="flex justify-between lg:mb-32 mb-20 lg:mx-0 mx-10">
        <h1>Our Team</h1>
        <div className="flex gap-3">
          <button className="border-4 border-primary-500 text-primary-500 text-5xl h-16 w-16 flex justify-center items-center rounded-full">
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          <button className="bg-primary-500 text-bgbase text-5xl h-16 w-16 flex justify-center items-center rounded-full">
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
      <div className="lg:flex gap-5">
        <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-20 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
          <div className="flex flex-col items-center">
            <div className="lg:-mt-24">
              <img src="/images/person.png" alt="person photo" />
            </div>
            <h4>Jhon Doe</h4>
            <span>CEO</span>
            <div className="italic text-center mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Bibendum dui laoreet diam
              tortor vestibulum nisl varius. Quis vehicula pharetra adipiscing
              laoreet varius sapien. Quis eros mattis egestas nec. Nunc cursus
              vitae non ultricies tellus sed tristique elit augue. Consequat
              ornare eget arcu tellus erat sagittis. Venenatis bibendum viverra
              odio vestibulum nibh dui at morbi vel. viverra tempus.
            </div>
          </div>
        </div>
        <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-20 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
          <div className="flex flex-col items-center">
            <div className="lg:-mt-24">
              <img src="/images/person-1.png" alt="person photo" />
            </div>
            <h4>Clara</h4>
            <span>CTO</span>
            <div className="italic text-center mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Bibendum dui laoreet diam
              tortor vestibulum nisl varius. Quis vehicula pharetra adipiscing
              laoreet varius sapien. Quis eros mattis egestas nec. Nunc cursus
              vitae non ultricies tellus sed tristique elit augue. Consequat
              ornare eget arcu tellus erat sagittis. Venenatis bibendum viverra
              odio vestibulum nibh dui at morbi vel. viverra tempus.
            </div>
          </div>
        </div>
        <div className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-20 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all">
          <div className="flex flex-col items-center">
            <div className="lg:-mt-24">
              <img src="/images/person-2.png" alt="person photo" />
            </div>
            <h4>William sam</h4>
            <span>Manager</span>
            <div className="italic text-center mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur. Bibendum dui laoreet diam
              tortor vestibulum nisl varius. Quis vehicula pharetra adipiscing
              laoreet varius sapien. Quis eros mattis egestas nec. Nunc cursus
              vitae non ultricies tellus sed tristique elit augue. Consequat
              ornare eget arcu tellus erat sagittis. Venenatis bibendum viverra
              odio vestibulum nibh dui at morbi vel. viverra tempus.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamProfile;
