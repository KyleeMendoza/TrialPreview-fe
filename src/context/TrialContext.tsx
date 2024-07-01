import React, { createContext, useState } from "react";
import { TrialContextType, Objective } from "../Types";

const contextInitialValues: TrialContextType = {
  objective: {
    label: [{ display: "" }],
    name: "",
    description: "",
  },
  duration: 0,
  reward: "",
  payout: "",
  setObjective: () => null,
  setDuration: () => null,
  setReward: () => null,
  setPayout: () => null,
};

const TrialContext = createContext<TrialContextType>(contextInitialValues);

const TrialProvider = (props: { children: React.ReactNode }) => {
  const [objective, setObjective] = useState<Objective>(
    contextInitialValues.objective
  );
  const [duration, setDuration] = useState<number>(
    contextInitialValues.duration
  );
  const [reward, setReward] = useState<string>(contextInitialValues.reward);
  const [payout, setPayout] = useState<string>(contextInitialValues.payout);

  const value = {
    ...contextInitialValues,
    objective,
    duration,
    reward,
    payout,
    setObjective,
    setDuration,
    setReward,
    setPayout,
  };

  return (
    <TrialContext.Provider value={value}>
      {props.children}
    </TrialContext.Provider>
  );
};

export { TrialContext, TrialProvider };
