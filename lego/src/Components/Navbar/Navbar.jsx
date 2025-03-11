import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <img className="logo" src="/logo.jpg" alt="LEGO Logo" />
      <ul className="feature">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("discover")}>Discover</li>
        <li onClick={() => scrollToSection("shop")}>Shop</li>
        <li onClick={() => scrollToSection("community")}>Community</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;

