interface Props {
  src: string;
  fullname: string;
  review: string;
}

function Testimonials_card({ src, fullname, review }: Props) {
  return (
    <div>
      <img src={src} alt="Profile picture of the person who wrote the review" />
      <h6>{fullname}</h6>
      <p>{review}</p>
    </div>
  );
}

export default Testimonials_card;