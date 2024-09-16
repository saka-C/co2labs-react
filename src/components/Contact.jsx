import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import WhatsappContact from "../function/WhatsappContact";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");
  const [emailError, setEmailError] = useState(""); // State untuk pesan error
  const navigate = useNavigate();

  // Fungsi untuk validasi email
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
 ` `
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi email sebelum mengirim
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError(""); // Reset error jika email valid
    }

    // Kirim email menggunakan EmailJS
    const templateParams = {
      name: name,
      email: email,
      message: message,
      source: source,
    };

    emailjs
      .send(
        "service_qycsnph", // Ganti dengan Service ID Anda
        "template_4nuofmy", // Ganti dengan Template ID Anda
        templateParams,
        "J2x4Aclyww44IOHxs" // Public Key Anda
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Navigasi ke halaman lain setelah sukses mengirim email
          navigate("/hassendmail", {
            state: {
              name,
              email,
              message,
              source,
            },
          });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  <WhatsappContact />

  return (
    <section className="lg:mx-28 mx-10 flex flex-col gap-16 py-24" id="contact">
      <div className="md:flex justify-between">
        <h1>Contact Us</h1>
        <div className="flex sm:gap-20 gap-10 justify-center items-center md:mt-0 mt-10">
          <a href="https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.3978 0.824707C25.8785 0.824707 25.3445 1.09594 24.9694 1.4549C21.9368 4.35872 21.0081 6.78705 22.1169 10.1135C19.5298 12.0965 17.8957 12.5831 14.6661 12.5831C10.251 12.5831 7.36832 13.1154 5.40685 15.0755V15.1366C3.5715 16.9712 3.5715 19.9087 5.40685 21.7417L10.8906 27.2681L1.54717 36.6074C0.782441 37.3711 0.725457 38.6538 1.49019 39.4176C2.25511 40.1833 3.54056 40.1833 4.30549 39.4176L13.6836 30.0372L19.1765 35.5029C21.012 37.3378 23.9503 37.3378 25.7859 35.5029H25.8472C27.8094 33.5426 28.3562 31.03 28.3562 26.2674C28.3562 23.2398 28.9776 21.1033 30.8589 18.8551C34.4797 19.9165 36.5863 18.9001 39.5555 15.9319C39.9227 15.5647 40.1062 15.0442 40.1062 14.525C40.1062 13.8363 39.9323 12.7805 39.4942 11.4669C38.7886 9.35169 37.5739 7.22356 35.6388 5.28951C33.7036 3.35566 31.5741 2.14149 29.4577 1.4363C28.1433 0.998414 27.087 0.824707 26.3978 0.824707Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="info@labsco2">
            <svg
              width="41"
              height="33"
              viewBox="0 0 41 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.65624 0.829102C4.67299 0.829102 1.55535 1.83567 1.00506 5.66421C0.828806 6.89013 1.21653 8.09648 2.10758 8.96794C2.55016 9.40073 3.01821 9.91577 3.63705 10.4367C5.19001 11.7468 7.16989 13.2195 9.02247 14.5374C14.12 18.1603 18.1444 20.4124 20.5277 20.4124C22.911 20.4124 26.9354 18.1603 32.0329 14.5374C33.8875 13.2195 35.8673 11.7449 37.4183 10.4367C38.0372 9.91577 38.5052 9.40269 38.9478 8.96794C39.8389 8.09648 40.2266 6.89013 40.0503 5.66421C39.5 1.83567 36.3824 0.829102 32.3992 0.829102H8.65624ZM0.944336 12.8846V24.3291C0.944336 28.655 4.45172 32.1624 8.77768 32.1624H32.2777C36.6037 32.1624 40.1111 28.655 40.1111 24.3291V12.8846C38.5052 14.4101 36.7114 15.9846 34.1753 17.7804C28.6215 21.7128 23.6336 24.3291 20.5277 24.3291C17.4218 24.3291 12.4339 21.7128 6.88006 17.7804C4.34206 15.9846 2.55017 14.4101 0.944336 12.8846Z"
                fill="black"
              />
            </svg>
          </a>
          <button onClick={WhatsappContact}>
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.53711 1.50107C6.05109 0.987852 6.66828 0.589732 7.34777 0.333087C8.02726 0.0764429 8.75354 -0.0328644 9.47847 0.012409C10.2034 0.0576823 10.9104 0.256503 11.5527 0.595694C12.195 0.934886 12.7578 1.4067 13.204 1.97988L18.4768 8.75375C19.4432 9.99632 19.784 11.6149 19.4021 13.1424L17.7953 19.5755C17.7128 19.9087 17.7176 20.2576 17.8092 20.5884C17.9007 20.9193 18.0761 21.2209 18.3182 21.4643L25.5356 28.6818C25.7793 28.9244 26.0814 29.1 26.4128 29.1916C26.7442 29.2832 27.0937 29.2877 27.4274 29.2046L33.8575 27.5978C34.6114 27.4104 35.398 27.3963 36.1581 27.5566C36.9182 27.7169 37.6321 28.0473 38.2462 28.5231L45.02 33.793C47.4552 35.6877 47.6785 39.2861 45.4989 41.4628L42.4615 44.5002C40.2877 46.6739 37.0389 47.6286 34.0103 46.5623C26.2573 43.838 19.2186 39.4 13.4184 33.5786C7.59739 27.7792 3.15935 20.7416 0.434668 12.9896C-0.628706 9.964 0.325981 6.71219 2.49973 4.53844L5.53711 1.50107Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:flex xl:gap-24 gap-5 lg:justify-between">
        <form
          onSubmit={handleSubmit}
          className="bg-white flex flex-col justify-center md:p-14 p-5 lg:w-1/2 gap-5 rounded-xl shadow-xl"
        >
          <h4>Hi there, how can we help?</h4>
          <input
            type="text"
            className="px-8 py-3 rounded-lg bg-gray-200 w-full"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="px-8 py-3 rounded-lg bg-gray-200 w-full"
            placeholder="Yourmail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <textarea
            className="px-8 py-3 rounded-lg bg-gray-200 w-full h-24"
            placeholder="Ask Our About Services"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <h5>Where Did You Hear About Us?</h5>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="Linkedin"
                value="Linkedin"
                checked={source === "Linkedin"}
                onChange={(e) => setSource(e.target.value)}
              />
              <label htmlFor="Linkedin">Linkedin</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="Instagram"
                value="Instagram"
                checked={source === "Instagram"}
                onChange={(e) => setSource(e.target.value)}
              />
              <label htmlFor="Instagram">Instagram</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="Job Ads"
                value="Job Ads"
                checked={source === "Job Ads"}
                onChange={(e) => setSource(e.target.value)}
              />
              <label htmlFor="Job Ads">Job Ads</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="Events and Seminars"
                value="Events and Seminars"
                checked={source === "Events and Seminars"}
                onChange={(e) => setSource(e.target.value)}
              />
              <label htmlFor="Events and Seminars">Events and Seminars</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="Other"
                value="Other"
                checked={source === "Other"}
                onChange={(e) => setSource(e.target.value)}
              />
              <label htmlFor="Other">Other</label>
            </div>
          </div>
          <Button
            type="submit"
            className="text-bgbase block self-start"
            text="Send"
          />
        </form>
        <div className="lg:w-1/2">
          <iframe
            className="w-full h-full rounded-xl lg:mt-0 mt-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.4776136128512!2d103.8008668418283!3d1.274634948208806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2sen!4v1721874615960!5m2!1sen!2sen&hl=en"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;
