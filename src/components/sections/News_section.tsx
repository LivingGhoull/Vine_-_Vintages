import { Button } from "../Button";
import Card from "../cards/News_card";
import list from "../../utility/news.json";

function News_section() {
  return (
    <section id="news_section" className="section-style">
      <div className="container news_section">
        <div className="news_section__header">
          <h2 className="h_mid_head">News</h2>
          <Button>See all news</Button>
        </div>
        <div className="news_section__list">
          {list.map((value, index) => (
            <Card
              key={index}
              header={value.header}
              body={value.body}
              src={value.src}
              alt={value.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News_section;
