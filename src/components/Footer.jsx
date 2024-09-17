import { useNavigate, useLocation } from "react-router-dom";
import WhatsappContact from "../function/WhatsappContact";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; // Import useGoogleReCaptcha

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { executeRecaptcha } = useGoogleReCaptcha(); // Mengambil executeRecaptcha dari hook

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          .scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  };

  <WhatsappContact />;

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fungsi untuk mengirim email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!executeRecaptcha) {
      console.log('Execute recaptcha is not available');
      setIsSubmitting(false);
      return;
    }

    // Dapatkan token reCAPTCHA
    const token = await executeRecaptcha('submit_form');
    console.log('Token reCAPTCHA:', token);

    // Siapkan parameter email yang dikirim, termasuk token reCAPTCHA
    const templateParams = {
      user_email: email,
      recaptchaToken: token, // Tambahkan token reCAPTCHA ke dalam parameter
    };

    try {
      // Kirim email ke Admin (mengumpulkan data form)
      await emailjs.send(
        "service_qycsnph", // Ganti dengan Service ID Anda
        "template_4nuofmy", // Ganti dengan Template ID Anda
        templateParams,
        "J2x4Aclyww44IOHxs" // Ganti dengan Public Key Anda
      );

      console.log("Email ke admin berhasil dikirim!");

      // Setelah email ke admin berhasil dikirim, kirim balasan otomatis ke pengguna
      await emailjs.send(
        "service_qycsnph",
        "template_0utilxt",
        templateParams,
        "J2x4Aclyww44IOHxs"
      );

      console.log("Balasan otomatis berhasil dikirim ke pengguna!");
      setModalIsOpen(true); // Tampilkan modal berhasil
    } catch (error) {
      console.log("Gagal mengirim email:", error);
    } finally {
      setIsSubmitting(false);
      setEmail(""); // Reset form input setelah selesai
    }
  };

  return (
    <>
      <footer className="bg-dark-700 lg:px-28 px-10 text-white pt-20 pb-10">
        <div className="lg:flex lg:justify-between">
          <div className="flex flex-col justify-between">
            <h3>Let’s Grow With CO2 Labs</h3>
            <div className="flex flex-col gap-5">
              <h5>Get Exclusive Updates From Us</h5>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Yourmail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 px-5 rounded-l-full text-black sm:w-72 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 py-2 px-5 rounded-r-full font-semibold text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
          <div className="flex xl:ml-0 lg:ml-10 flex-wrap gap-8 lg:mt-0 mt-20">
            <ul>
              <h6>Services</h6>
              <li>
                <a href="/service/web-main">Web Maintenance</a>
              </li>
              <li>
                <a href="/service/web-dev">Web & App Development</a>
              </li>
              <li>
                <a href="/service/it-support">IT Service</a>
              </li>
              <li>
                <a href="/service/ai-solution">3rd Party AI Solution</a>
              </li>
            </ul>
            <ul>
              <h6>About</h6>
              <li>
                <button onClick={() => handleNavigation("approach")}>
                  Our Approach
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("team")}>
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation("portfolio")}>
                  Our Portfolio
                </button>
              </li>
            </ul>
            <ul>
              <h6>Contact</h6>
              <li>
                <button onClick={WhatsappContact} className="flex items-center">
                  <i className="bx bxs-phone text-2xl mr-2"></i>+65-8118-1595
                </button>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@co2labs.com" className="flex items-center">
                  <i className="bx bxl-gmail text-2xl mr-2"></i>info@co2labs.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A"
                  className="flex items-center"
                >
                  <i className="bx bx-map-alt text-2xl mr-2"></i>100D Pasir
                  Panjang Road{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse justify-between mt-10 bot ">
          <span>©2024 CO2 Labs. All Right Reserved</span>
          <div className="flex gap-10 sm:mb-0 mb-5">
            <a href="/faq">FAQ</a>
            <a href="/termspolicy">Terms & Policy</a>
          </div>
        </div>
      </footer>
      {modalIsOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 flex flex-col rounded-lg shadow-lg sm:w-full sm:max-w-sm w-5/6">
            <div className="flex flex-col items-center py-10">
              <i class="bx bxs-badge-check text-green-300 text-9xl"></i>
              <h5 className="text-lg mt-5 text-center">
                Thank you for Subscribing
              </h5>
            </div>
            <button
              onClick={() => setModalIsOpen(false)}
              className="mt-4 py-2 px-4 text-gray-500 border-bgbase border-[1px] rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Footer;
