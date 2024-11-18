import { useState } from "react";
import Navigation from "./Navigation";

function Header() {
  const [menu_open, set_menu_open] = useState(false);

  return (
    <>
      {menu_open && (
        <div className="mobile_nav">
          <div className="container mobile_nav__flex">
            <button
              role="button"
              aria-expanded="true"
              aria-label="Dropdown menu open"
              className="menu_btn mobile_nav__close"
              onClick={() => set_menu_open(!menu_open)}
            >
              <img src="assets\images\icons8-close-48.png" />
            </button>

            <nav>
              <ul className="mobile_nav__list">
                <li>
                  <a href="#sales_section">Sales points</a>
                </li>
                <li>
                  <a href="#about_section">About us</a>
                </li>
                <li>
                  <a href="#testimonial_section">Testimonials</a>
                </li>
                <li>
                  <a href="#news_section">News</a>
                </li>
                <li>
                  <a href="#faq_section">Faq</a>
                </li>
                <li>
                  <a href="#newsletter_section">Newsletter sign up</a>
                </li>
                <li>
                  <a href="#contact_section">Contact us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <header className="section-style-deafult header">
        <div className="container header__content">
          <h2 className="h_mid_head">Vine & Vintages</h2>
          <div className="header__navigation">
            <Navigation />
          </div>

          <button
            role="button"
            aria-expanded="false"
            aria-label="Dropdown menu down"
            className="menu_btn header__hamburgermenu"
            onClick={() => set_menu_open(!menu_open)}
          >
            <img
              src="assets\images\icons8-hamburger-menu-48.png"
              alt="Hamburger menu"
            />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
