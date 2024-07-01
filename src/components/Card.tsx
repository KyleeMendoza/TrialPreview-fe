import React from "react";
import "../styles/layout/_objective.scss";
import { Card as ObjectiveCard } from "../Types";

type CardProps = ObjectiveCard & React.ComponentPropsWithoutRef<"div">;

function Card({ title, description, img, ...divProps }: CardProps) {
  return (
    <div className="objective_block" {...divProps}>
      <p className="objective_block_title">{title}</p>
      <p className="objective_block_description">{description}</p>
      <img src={img} alt="Cover" className="ObjectiveImg" />
    </div>
  );
}

export default Card;
