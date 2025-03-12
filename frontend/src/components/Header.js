import React from "react";
import "./../styles.css"; // Import styles

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Hotel Logo" width="100" />
      </div>
      <nav>
        <ul>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#booking">Book a Room</a></li>
          <li><a href="#booking">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
