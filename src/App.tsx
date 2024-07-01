import Objectives from "./layout/Objectives";
import Parameters from "./layout/Parameters";
import Preview from "./layout/Preview";
import "./styles/layout/_container.scss";
import { TrialProvider } from "./context/TrialContext";

function App() {
  return (
    <TrialProvider>
      <main className="main">
        <div className="content">
          <div className="content_right">
            <div className="content_right_objective">
              <p className="section_title">set ojectives</p>
              <Objectives />
            </div>
            <div className="content_right_parameter">
              <p className="section_title">set trial parameters</p>
              <Parameters />
            </div>
          </div>
          <div className="content_left">
            <p className="section_title">trial preview</p>
            <Preview />
          </div>
        </div>
      </main>
    </TrialProvider>
  );
}

export default App;
