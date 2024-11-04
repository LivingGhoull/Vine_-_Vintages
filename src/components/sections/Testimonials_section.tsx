import Testimonials_card from "../cards/Testimonials_card";
import testimonials_list from "../../utility/testimonials.json";

function Testimonials_section() {
  return (
    <section>
      <h2>Testimonials</h2>

      <div>
        {testimonials_list.map((value, index) => (
          <Testimonials_card key={index}
            src={value.src}
            fullname={value.fullname}
            review={value.review}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials_section;
