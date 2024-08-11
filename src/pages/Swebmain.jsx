import Headerpages from "../components/Headerpages";
import Navbar from "../components/Navbar";
import Introsec from "../components/Introsection";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import ContainerAdvantage from "../components/ContainerAdvantage";
import Advantages from "../components/Advantages";

const Swebmain = () => {
  return (
    <>
      <Navbar />
      <Headerpages
        title="Website Maintenance"
        image="1"
        desc="Comprehensive Website Maintenance Services (WAMS)"
      />
      <Introsec
        image="toolbox"
        desc="Your website is a vital part of your business, and keeping it in top shape is essential. CO2 Labs offers reliable website maintenance solutions to ensure your site remains secure, up-to-date, and performing at its best."
      />
      <ContainerAdvantage>
        <Advantages title="Regular Updates" desc=" We keep your website up to date with the latest software and plugin updates to ensure compatibility and security."/>
        <Advantages title="Security Monitoring" desc="Our team monitors your site 24/7 to detect and prevent any security threats, protecting your data and reputation."/>
        <Advantages title="Performance Optimization" desc="We regularly analyze and optimize your site’s performance to ensure fast loading times and a seamless user experience."/>
        <Advantages title="Content Management" desc="Need to update content or add new features? Our team is here to help with timely content updates and enhancements."/>
      </ContainerAdvantage>
      <Cta
        image="cta1"
        desc="Partner with CO2 Labs for reliable website maintenance and enjoy peace of mind knowing your site is in expert hands. Contact us today to learn more about our services."
        gototext="Get a Free Quote"
      />
      <Footer />
    </>
  );
};
export default Swebmain;
