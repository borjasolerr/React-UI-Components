import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer() {
  return (
    <div className="card">
      <div className="card__banner">
        <CardBanner />
      </div>
      <div className="card__content">
        <CardContent />
      </div>
    </div>
  );
}

export default CardContainer;
