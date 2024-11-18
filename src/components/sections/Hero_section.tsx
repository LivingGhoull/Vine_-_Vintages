import { Hero_Button } from "../Button";

function Hero_section() {
  return (
    <section className="section-style hero">
      <div className="hero_section container">
        <div className="hero_section__info">
          <h1 className="h_big_head">Experience the Art of Winemaking</h1>
          <p className="hero_section__description">
            Discover our finest selection of handcrafted wines and explore the
            heart of our vineyard with exclusive tours of our winery. Whether
            you’re a connoisseur or new to the world of wine, we invite you to
            taste and experience the passion behind every bottle
          </p>
          <Hero_Button>Book a Winery Tour</Hero_Button>
        </div>
        <img
          className="hero_section__img"
          src="assets\images\wine-bottle.png"
          alt="Wine bottle"
        />
      </div>
    </section>
  );
}

export default Hero_section;
