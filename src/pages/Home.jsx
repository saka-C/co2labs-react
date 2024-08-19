import Navbar from "../components/Navbar";
import HeaderHome from "../components/Header";
import ServicesSec from "../components/ServicesSec";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Approach from "../components/Approach";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <HeaderHome />
        <ServicesSec />
        <Approach />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default Home;
