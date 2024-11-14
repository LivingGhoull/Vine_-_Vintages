import { Button } from "./Button";
import { Input } from "./Input";

function Footer() {
  return (
    <footer className="section-style-deafult footer">
      <div className="container footer__content">
        <div className="footer__grid">
          <div className="footer__head">
            <h2 className="h_mid_head">Vine & Vintages</h2>
            <div className="footer__socials">
              <a href="#Linkedin">
                <img
                  src="src\assets\images\socials\icons8-linkedin-logo-48.png"
                  alt="Redirect to Linkedin Vine & Vintages"
                />
              </a>
              <a href="#Facebook">
                <img
                  src="src\assets\images\socials\icons8-facebook-logo-48.png"
                  alt="Redirect to Facebook Vine & Vintages"
                />
              </a>
              <a href="#Twitter">
                <img
                  src="src\assets\images\socials\icons8-twitter-logo-48.png"
                  alt="Redirect to Twitter Vine & Vintages"
                />
              </a>
            </div>
          </div>

          <nav>
            <ul className="footer__nav">
              <li>
                <h3>Navigate</h3>
              </li>
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
              <h3>Contact us</h3>
              <p>
                "The contact details listed here are for demonstration purposes
                only and are not real."
              </p>
            </div>
            <p>
              <h4>Email: </h4>info@vineandvintages-fake.com
            </p>
            <p>
              <h4>Tlf: </h4>(555) 012-3456
            </p>
            <p>
              <h4>Address:</h4> 123 Vine Street Vintagetown, AA 12345
            </p>
          </div>

          <div className="footer__subscripe">
            <div>
              <h3>Subscripe</h3>
              <p>Enter your email to get notifed about our news</p>
            </div>
            <Input placeholder="mail@hotmail.dk">Email</Input>
            <Button>Subscripe</Button>
          </div>
        </div>

        <p>© 2024 Vine&Vintages. ("NOT REAL")</p>
      </div>
    </footer>
  );
}

export default Footer;
