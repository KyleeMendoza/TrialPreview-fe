export type Card = {
  title: string;
  description: string;
  img: string;
};

export type Objective = {
  label: Array<{
    display: string;
  }>;
  name: string;
  description: string;
};

export type TrialContextType = {
  objective: Objective;
  duration: number;
  reward: string;
  payout: string;
  setObjective: (obj: Objective) => void;
  setDuration: (duration: number) => void;
  setReward: (reward: string) => void;
  setPayout: (payout: string) => void;
};
