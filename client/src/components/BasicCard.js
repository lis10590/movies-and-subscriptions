import "../styles/card.css";
import "../styles/flip-transition.css";

const BasicCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="card-back">{props.back}</div>
      <div className="card-front">{props.front}</div>
    </div>
  );
};

export default BasicCard;
