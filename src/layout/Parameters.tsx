import "../styles/layout/_parameters.scss";
import ParameterSelect from "../components/Select";
import { useContext } from "react";
import { TrialContext } from "../context/TrialContext";

function Parameters() {
  const { setDuration, reward, setReward, payout, setPayout } =
    useContext(TrialContext);

  const onChangeReward = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReward(e.target.value);
  };

  const onChangePayout = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayout(e.target.value);
  };

  return (
    <div className="parameter">
      <div className="parameter_block">
        <div className="parameter_block_label">
          <p className="parameter_block_label_title">Duration</p>
          <p className="parameter_block_label_description">
            Set expiration time to complete the trial.
          </p>
        </div>
        <div className="parameter_block_input">
          <div className="parameter_block_input_duration">
            <ParameterSelect hours={72} onClick={() => setDuration(72)} />
            <ParameterSelect hours={96} onClick={() => setDuration(96)} />
            <ParameterSelect hours={120} onClick={() => setDuration(120)} />
          </div>
        </div>
      </div>
      <div className="parameter_block">
        <div className="parameter_block_label">
          <p className="parameter_block_label_title">Rewards</p>
          <p className="parameter_block_label_description">
            Set rewards to be won by the Trial winners.
          </p>
        </div>
        <div className="parameter_block_input">
          <input
            className="parameter_block_input_rewards"
            value={reward}
            type="number"
            placeholder="0"
            onChange={(e) => onChangeReward(e)}
            style={
              reward !== ""
                ? {
                    border: "2px solid #00E0B3",
                    backgroundColor: "rgba(0, 224, 179, .2)",
                    color: "#fff",
                  }
                : {}
            }
          />
        </div>
      </div>
      <div className="parameter_block">
        <div className="parameter_block_label">
          <p className="parameter_block_label_title">Maximum Payouts</p>
          <p className="parameter_block_label_description">
            Set maximum number of payouts to be won.
          </p>
        </div>
        <div className="parameter_block_input">
          <input
            className="parameter_block_input_payouts"
            value={payout}
            type="number"
            placeholder="0"
            onChange={(e) => onChangePayout(e)}
            style={
              payout !== ""
                ? {
                    border: "2px solid #00E0B3",
                    backgroundColor: "rgba(0, 224, 179, .2)",
                    color: "#fff",
                  }
                : {}
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Parameters;
