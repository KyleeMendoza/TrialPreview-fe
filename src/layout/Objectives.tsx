import "../styles/layout/_objective.scss";
import { Objective } from "../Types";
import Card from "../components/Card";
import objectives from "../constants/objectives";
import { useContext } from "react";
import { TrialContext } from "../context/TrialContext";
import Rookie from "../assets/rookie.svg";
import Miracle from "../assets/3-minute-miracle.svg";
import Blazing from "../assets/guns-blazing.svg";

const ObjectiveImg = [Rookie, Miracle, Blazing];

function Objectives() {
  const { setObjective, objective } = useContext(TrialContext);
  return (
    <div className="objective">
      {objectives.map((item: Objective, index: number) => (
        <Card
          key={index}
          title={item.name}
          description={item.description}
          img={ObjectiveImg[index]}
          onClick={() => setObjective(item)}
          style={
            objective.name === item.name
              ? {
                  border: "2px solid #00E0B3",
                  backgroundColor: "rgba(0, 224, 179, .2)",
                  color: "#fff",
                }
              : {}
          }
        />
      ))}
    </div>
  );
}

export default Objectives;
