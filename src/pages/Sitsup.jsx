import Headerpages from "../components/Headerpages";
import Navbar from "../components/Navbar";
import Introsec from "../components/Introsection";
import Footer from "../components/Footer";

const Sitsup = () => {
  return (
    <>
      <Navbar />
      <Headerpages
        title="IT Support Services"
        image="3"
        desc="Comprehensive IT Support Solutions"
      />
      <Introsec image="itsup" desc="At CO2 Labs, we understand that effective IT support is crucial for your business success. Our comprehensive IT support solutions are tailored to meet the unique needs of your organization, providing you with peace of mind."/>
      <Footer />
    </>
  );
};
export default Sitsup;
