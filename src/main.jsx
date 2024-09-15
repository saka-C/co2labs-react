import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

AOS.init({
  duration: 1000,
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LfK8UEqAAAAAMXXcGtW1vJxZS8RcYCtusGSLGi2">
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
