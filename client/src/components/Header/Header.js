import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <h1>Adoption Dashboard</h1>
      </div>
      <nav className="Header__nav" aria-label="Primary">
        <ul className="Header__menu">
          <li className="Header__element">
            <a className="Header__link Header__link--active" href="">
              DogBase
            </a>
          </li>
          <li className="Header__element">
            <a className="Header__link" href="">
              DogMail
            </a>
          </li>
        </ul>
      </nav>
      <div className="Header__profile">
        <a href="" className="Header__button">
          <i className="icon-user" />
        </a>
      </div>
    </header>
  );
};

export default Header;
