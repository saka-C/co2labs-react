const WhatsappContact = () => {
    const phoneNumber = "6581181595"; // Ganti dengan nomor WhatsApp kamu
    const message = "Hi Co2, I would like ask about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = url;
};

export default WhatsappContact