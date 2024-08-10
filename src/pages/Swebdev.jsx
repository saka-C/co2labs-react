import Headerpages from "../components/Headerpages";
import Navbar from "../components/Navbar";
import Introsec from "../components/Introsection";
import Footer from "../components/Footer";

const Swebdev = () => {
  return (
    <>
      <Navbar />
      <Headerpages
        title="Website & App Development"
        image="2"
        desc="Innovative Website & App Development Solutions"
      />
      <Introsec image="uiux" desc="CO2 Labs provides innovative website and app development solutions tailored to help your business thrive in the digital age. Our experienced team leverages the latest technologies to create dynamic and engaging digital experiences."/>
      <Footer />
    </>
  );
};
export default Swebdev;
