import Headerpages from "../components/Headerpages";
import Navbar from "../components/Navbar";
import Introsec from "../components/Introsection";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import ContainerAdvantage from "../components/ContainerAdvantage";
import Advantages from "../components/Advantages";

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
      <ContainerAdvantage>
        <Advantages title="24/7 Support" desc="Round-the-clock IT support to address any technical issues whenever they arise."/>
        <Advantages title="Proactive Maintenance" desc="Regular maintenance and updates to prevent problems and ensure your systems run smoothly."/>
        <Advantages title="IT Consulting" desc="Expert advice and strategic planning to help you make informed decisions about your IT infrastructure."/>
        <Advantages title="Cybersecurity Services" desc="Protect your business from cyber threats with our partner third party security solutions, including firewalls, antivirus, and threat detection."/>
      </ContainerAdvantage>
      <Cta image="cta3" desc="Trust CO2 Labs for dependable IT support that empowers your business. Reach out to us today to discover how we can support your IT needs." gototext="Get IT Support"/>
      <Footer />
    </>
  );
};
export default Sitsup;
