import Navbar from "../components/Navbar";
import HeaderHome from "../components/Header";
import ServicesSec from "../components/ServicesSec";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <HeaderHome />
        <ServicesSec />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default Home;
