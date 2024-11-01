import sales from "../../utility/sales_points.json";
import Card from "../cards/Sales_card";

function Sales_section() {
  return (
    <section className="dark_wine">
      <div>
        <h2 className="h_mid_head">Sales points</h2>
        <div>
          {sales.map((info, index) => (
            <Card key={index} header={info.header} body={info.body} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sales_section;
