import Testimonials_card from "../cards/Testimonials_card";
import testimonials_list from "../../utility/testimonials.json";

function Testimonials_section() {
  return (
    <section>
      <div className="container testimonial_section">
        <h2 className="h_mid_head h_mid_head-center">Testimonials</h2>
        <div className="testimonial_section__list">
          {testimonials_list.map((value, index) => (
            <Testimonials_card
              key={index}
              src={value.src}
              fullname={value.fullname}
              review={value.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials_section;
