import { Button } from "../Button";
import Card from "../cards/News_card";
import list from "../../utility/news.json";

function News_section() {
  return (
    <section>
      <div>
        <div>
          <h2>News</h2>
          <Button>See all news</Button>
        </div>
        <div>
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