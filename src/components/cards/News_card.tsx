interface Props {
  header: string;
  body: string;
  
  src: string;
  alt: string;
}

function News_card({header, body, src, alt}: Props) {
  return (
    <div className="sales_card card">
      <img src={src} alt={alt} />
      <h6>{header}</h6>
      <p>{body}</p>
    </div>
  );
}

export default News_card;
