interface Props {
  src: string;
  fullname: string;
  review: string;
}

function Testimonials_card({ src, fullname, review }: Props) {
  return (
    <div className="testimonial_card card">
      <img
        className="testimonial_card__profile_pic"
        src={src}
        alt="Profile picture of the person who wrote the review"
      />
      <h6 className="testimonial_card__fullname">{fullname}</h6>
      <p>
        <span className="testimonial_card__review">“</span> {review}
      </p>
    </div>
  );
}

export default Testimonials_card;