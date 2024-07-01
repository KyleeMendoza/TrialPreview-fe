import React from "react";
import "../styles/layout/_parameters.scss";

//Context
import { useContext } from "react";
import { TrialContext } from "../context/TrialContext";

type ParameterSelectProps = {
  hours: number;
} & React.ComponentPropsWithoutRef<"div">;

function ParameterSelect({ hours, ...divProps }: ParameterSelectProps) {
  const { duration } = useContext(TrialContext);
  return (
    <div
      className="parameter_block_input_duration_choice"
      {...divProps}
      style={
        duration === hours
          ? {
              border: "2px solid #00E0B3",
              backgroundColor: "rgba(0, 224, 179, .2)",
              color: "#fff",
            }
          : {}
      }
    >
      {hours} hours
    </div>
  );
}

export default ParameterSelect;
