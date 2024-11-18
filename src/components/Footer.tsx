import { Button } from "./Button";
import { Input } from "./Input";

function Footer() {
  return (
    <footer className="section-style-deafult footer">
      <div className="container footer__content">
        <div className="footer__grid">
          <div className="footer__head">
            <p className="h_mid_head">Vine & Vintages</p>

            <div className="footer__socials">
              <a href="#Linkedin" className="footer__socials_link">
                <img
                  src="assets\images\socials\icons8-linkedin-logo-48.png"
                  alt="Redirect to Linkedin Vine & Vintages"
                />
              </a>
              <a href="#Facebook" className="footer__socials_link">
                <img
                  src="assets\images\socials\icons8-facebook-logo-48.png"
                  alt="Redirect to Facebook Vine & Vintages"
                />
              </a>
              <a href="#Twitter" className="footer__socials_link">
                <img
                  src="assets\images\socials\icons8-twitter-logo-48.png"
                  alt="Redirect to Twitter Vine & Vintages"
                />
              </a>
            </div>
          </div>

          <nav className="footer__nav">
            <p className="footer__title">Navigate</p>

            <ul className="footer__list">
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
                <a href="#contact_section">Contact us</a>
              </li>
            </ul>
          </nav>

          <div className="footer__contact_us">
            <div>
              <p className="footer__title">Contact us</p>
              <p>
                "The contact details listed here are for demonstration purposes
                only and are not real."
              </p>
            </div>
            <div className="footer__contact_info">
              <p>
                <p className="footer__undertitle">Email: </p>
                info@vineandvintages-fake.com
              </p>
              <p>
                <p className="footer__undertitle">Tlf: </p>(555) 012-3456
              </p>
              <p>
                <p className="footer__undertitle">Address:</p> 123 Vine Street
                Vintagetown, AA 12345
              </p>
            </div>
          </div>

          <div className="footer__subscripe">
            <div>
              <p className="footer__title">Subscribe</p>
              <p>Enter your email to get notifed about our news</p>
            </div>
            <Input placeholder="mail@hotmail.dk">Email</Input>
            <Button>Subscribe</Button>
          </div>
        </div>
        <p className="footer__copyright">© 2024 Vine&Vintages. ("NOT REAL")</p>
      </div>
    </footer>
  );
}

export default Footer;
