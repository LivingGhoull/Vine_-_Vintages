function About_section() {
  return (
    <section id="about_section" className="section-style">
      <div className="container about_section">
        <div className="about_section__info">
          <h2 className="h_mid_head">About us</h2>
          <p>
            At Vine & Vintages, we believe that great wine begins in the
            vineyard. For generations, our family has cultivated the finest
            grapes, blending tradition with innovation to craft wines that
            capture the essence of our land. Every bottle tells a story—of
            passion, patience, and a commitment to excellence. Explore our
            journey and discover the heart and soul behind every sip.
          </p>
        </div>
        <img
          className="about_section__img"
          src="src\assets\images\team-5842784_640.jpg"
          alt="Company employees having a meeting around there workstations"
        />
      </div>
    </section>
  );
}

export default About_section;