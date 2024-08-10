import Headerpages from "../components/Headerpages";
import Navbar from "../components/Navbar";
import Introsec from "../components/Introsection";
import Footer from "../components/Footer";

const S3party = () => {
  return (
    <>
      <Navbar />
      <Headerpages
        title="Third Party AI Tools"
        image="4"
        desc="Harness the Power of Third-Party AI Tools"
      />
      <Introsec image="robot" desc="CO2 Labs helps you harness the power of third-party AI tools to enhance your business operations and drive innovation. Our team is skilled in integrating and customizing AI solutions to meet your specific needs."/>
      <Footer />
    </>
  );
};
export default S3party;
