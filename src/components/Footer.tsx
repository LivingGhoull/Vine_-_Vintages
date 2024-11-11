import Navigation from "./Navigation";

function Footer() {
  return (
    <footer className="section-style footer">
      <div className="container footer__content">
        <h2 className="h_mid_head">Vine & Vintages</h2>
        <Navigation />
        <div className="footer__socials">
          <img
            src="src\assets\images\socials\icons8-linkedin-logo-48.png"
            alt="Redirect to Linkedin Vine & Vintages "
          />
          <img
            src="src\assets\images\socials\icons8-facebook-logo-48.png"
            alt="Redirect to Facebook Vine & Vintages "
          />
          <img
            src="src\assets\images\socials\icons8-twitter-logo-48.png"
            alt="Redirect to Twitter Vine & Vintages "
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;