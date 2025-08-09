import React from 'react';
import logo from '../assets/logo.png'; // Your main PauraX logo
import whatsappLogo from '../assets/wsapplogo.png'; // The new WhatsApp logo

function Header() {
  // This is the direct link to start a chat with the Twilio Sandbox number
  const whatsappLink = "https://wa.me/14155238886"; 

  return (
    <header className="flex justify-between items-center p-4 mb-8">
      {/* PauraX Logo on the left */}
      <img src={logo} alt="PauraX Logo" className="h-10" />

      {/* WhatsApp Link on the right (text removed) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition duration-300"
      >
        {/* The image is now the only content of the link */}
        <img src={whatsappLogo} alt="Chat on WhatsApp" className="h-10 w-10" />
      </a>
    </header>
  );
}

export default Header;
