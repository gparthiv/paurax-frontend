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

      {/* New WhatsApp Link on the right */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        // Use flexbox to align the text and logo
        className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-green-600 transition duration-300"
      >
        <span>Tap to chat with our bot --&gt;</span>
        <img src={whatsappLogo} alt="WhatsApp" className="h-8 w-8" />
      </a>
    </header>
  );
}

export default Header;