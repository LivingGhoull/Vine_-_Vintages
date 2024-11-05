import {Button} from "../Button"
interface Props {
  header: string;
  body: string;
}

function Sales_card({header, body}: Props ) {
  return (
    <div className="sales_card card">
      <h3 className="h_small_head">{header}</h3>
      <p>{body}</p>
      <Button>Learn more</Button>
    </div>
  );
}

export default Sales_card