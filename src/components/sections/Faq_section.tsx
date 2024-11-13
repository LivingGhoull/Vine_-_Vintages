import Card from "../cards/Faq_card";
import list from "../../utility/faq_list.json";

function Faq_section() {
  return (
    <section id="faq_section" className="section-style">
      <div className="container faq_section">
        <h2 className="h_mid_head h_mid_head-center">FAQ</h2>
        <div className="faq_section__list">
          {list.map((value, index) => (
            <Card key={index} question={value.question} answer={value.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq_section;
