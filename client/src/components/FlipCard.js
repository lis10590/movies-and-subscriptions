import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import BasicCard from "./BasicCard";
import "../styles/flipCard.css";

const FlipCard = (props) => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <BasicCard
          onClick={() => {
            setShowFront((v) => !v);
          }}
          front={props.front}
          back={props.back}
        />
      </CSSTransition>
    </div>
  );
};

export default FlipCard;
