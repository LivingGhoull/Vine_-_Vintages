import qustion_mark from "../../assets/images/icons8-question-mark-32.png"

interface Props {
  question: string;
  answer: string;
}

function Faq_card({question, answer}:Props) {
  return (
    <div className="faq_card card">
      <div className="faq_card__question">
        <img src={qustion_mark} alt="Qustion mark to Frequent ask qusitons" />
        <h6>{question}</h6>
      </div>
      <p>{answer}</p>
    </div>
  );
}

export default Faq_card