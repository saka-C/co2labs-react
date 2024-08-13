import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Backbutton from "../components/Backbutton";
import ConfettiAnimation from '../particles/ConfettiAnimation';

function HasSendMail() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah ada data dari state
    if (!location.state || !location.state.name || !location.state.email) {
      // Jika tidak ada data, alihkan ke halaman Notfound
      navigate("/notfound", { replace: true });
    }
  }, [location.state, navigate]);

  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center lg:mx-28 mx-10">
        <ConfettiAnimation />
        <h3 className="text-center">Thank you for asking</h3>
        <div className="bg-white rounded-3xl flex flex-col items-center md:w-1/2 p-10 shadow-lg my-5">
          <div className="rounded-md bg-primary-100 p-3 mb-5">
            <svg
              width="41"
              height="33"
              viewBox="0 0 41 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.9 0H4.1C1.8368 0 0 1.8368 0 4.1V28.7C0 30.9632 1.8368 32.8 4.1 32.8H36.9C39.1632 32.8 41 30.9632 41 28.7V4.1C41 1.8368 39.1632 0 36.9 0ZM36.9 9.635L20.5 20.5697L4.1 9.635V4.70885L20.5 15.6415L36.9 4.70885V9.635Z"
                fill="#153147"
              />
            </svg>
          </div>
          <h6 className="text-center md:text-xl text-base">
            Hi <strong>{location.state?.name}</strong>,
            <br /><br />
            Thank you for leaving your contact details with CO2 Labs! We all be
            in touch soon with more information. If you have any questions, feel
            free to reach out to us! Best regards. <br /><br />
            The CO2 Collective
          </h6>
        </div>
        <Backbutton />
      </section>
    </>
  );
}

export default HasSendMail;
