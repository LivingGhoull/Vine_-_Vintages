import { Button } from "../Button";
import { Input } from "../Input";

function Newsletter_section() {
  return (
    <section className="section-style">
      <div className="container newsletter_section">
        <h2 className="h_big_head">Newsletter sign up</h2>

        <div className="newsletter_section__subscribe">
          <Input placeholder="mail@hotmail.dk">Email</Input>
          <Button>Join now</Button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter_section;
