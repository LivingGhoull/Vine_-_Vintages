interface Props {
  header: string;
  body: string;
  
  src: string;
  alt: string;
}

function News_card({header, body, src, alt}: Props) {
  return (
    <div className="news_card card">
      <div className="news_card__hover">
        <p className="news_card__text">Read more</p>
        <div className="news_card__hover_background"></div>
      </div>

      <img className="news_card__img" src={src} alt={alt} />
      <div className="news_card__info">
        <h6 className="news_card__header">{header}</h6>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default News_card;
