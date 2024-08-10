import Headerpages from "../components/Headerpages";
import Navbar from "../components/Navbar";
import Introsec from "../components/Introsection";
import Footer from "../components/Footer";
import Cta from "../components/Cta";

const Swebmain = () =>{
    return(
        <>
            <Navbar />
            <Headerpages title="Website Maintenance" image="1" desc="Comprehensive Website Maintenance Services (WAMS)"/>
            <Introsec image="toolbox" desc="Your website is a vital part of your business, and keeping it in top shape is essential. CO2 Labs offers reliable website maintenance solutions to ensure your site remains secure, up-to-date, and performing at its best."/>
            <Cta />
            <Footer />
        </>
    )
}
export default Swebmain;