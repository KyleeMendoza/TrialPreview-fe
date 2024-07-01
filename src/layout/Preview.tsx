import "../styles/layout/_preview.scss";
import { useContext } from "react";
import { TrialContext } from "../context/TrialContext";
import diamond from "../assets/diamond.svg";

function Preview() {
  const { objective, duration, reward, payout } = useContext(TrialContext);
  return (
    <div className="preview">
      <div className="preview_item">
        <img src={diamond} alt="Diamond SVG" className="diamondImg" />
        <div className="preview_item_top">
          <div className="preview_item_top_name">
            <p>
              Hosted by <span>Sh4cnu</span>
            </p>
            <div className="live">live</div>
          </div>
          <div className="preview_item_top_reward">
            <p>trial completion reward</p>
            <p
              style={
                reward !== ""
                  ? {
                      color: "#00E0B3",
                    }
                  : {}
              }
            >
              PHP{" "}
              <span>{reward ? parseFloat(reward).toLocaleString() : 0}</span>.00
            </p>
          </div>
        </div>
        <div className="preview_item_bottom">
          <div className="preview_item_bottom_remaining">
            <p>time left</p>
            <p
              style={
                duration !== 0
                  ? {
                      color: "#00E0B3",
                    }
                  : {}
              }
            >
              <span>{duration}</span>h 00m 00s
            </p>
          </div>
          <div className="preview_item_bottom_remaining">
            <p>payouts left</p>
            <p
              style={
                payout !== ""
                  ? {
                      color: "#00E0B3",
                    }
                  : {}
              }
            >
              {payout !== "" ? payout : "-"}/{payout !== "" ? payout : "-"}
            </p>
          </div>
          <div className="preview_item_bottom_remaining">
            <p>objective</p>
            <p
              style={
                objective.name !== ""
                  ? {
                      color: "#00E0B3",
                    }
                  : {}
              }
            >
              {objective.name ? objective.name : "-"}
            </p>
            {objective.label.map((item: { display: string }, index: number) => (
              <p key={index} style={{ fontSize: ".7rem", color: "#00E0B3" }}>
                {item.display}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
