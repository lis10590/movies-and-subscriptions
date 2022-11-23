import { Card } from "react-bulma-companion";
import { useState } from "react";
import "../styles/flipCard.css";

const FlipCard = (props) => {
  const [isRotated, setIsRotated] = useState(false);

  const onRotate = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className={`card ${isRotated ? "rotated" : ""}`} onClick={onRotate}>
      <div className="front">{props.front}</div>
      <div className="back">{props.back}</div>
    </div>
  );
};

export default FlipCard;
