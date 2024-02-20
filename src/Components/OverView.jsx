import React, { useState } from "react";
import PercentageChart from "../Components/PercentageChart"; // Assuming you have created a PercentageChart component
import "../Styles/OverView.css"; // Import the CSS file for styling

function OverView() {
  const [overViewData, setOverViewData] = useState({
    Connections: 75,
    Configurations: 100,
    Pipelines: 100,
    Schedules: 100,
  });

  return (
    <div className="overViewContainer container mt-4">
      <div className="row">
        <h4>Overview</h4>
        <br />
        <div className="col-md-2 overview-item connections1">
          <h4>
            Connections
            <span>
              <i class="fa-solid fa-plug"></i>
            </span>
          </h4>
          <PercentageChart percentage={overViewData.Connections} />
          <h5>Total Count: {overViewData.Connections}</h5>
        </div>
        <div className="col-md-2 overview-item configurations2">
          <h4>
            Configurations
            <span>
              <i class="fa-brands fa-connectdevelop"></i>
            </span>
          </h4>
          <PercentageChart percentage={overViewData.Configurations} />
          <h5>Total Count: {overViewData.Configurations}</h5>
        </div>
        <div className="col-md-2 overview-item pipelines3">
          <h4>
            Pipelines{" "}
            <span>
              {" "}
              <i class="fa-brands fa-pied-piper-pp"></i>{" "}
            </span>
          </h4>
          <PercentageChart percentage={overViewData.Pipelines} />
          <h5>Total Count: {overViewData.Pipelines}</h5>
        </div>
        <div className="col-md-2 overview-item schedules4">
          <h4>
            Secdules
            <span>
              {" "}
              <i class="fa-regular fa-clock"></i>
            </span>
          </h4>
          <PercentageChart percentage={overViewData.Schedules} />
          <h5>Total Count: {overViewData.Schedules}</h5>
        </div>
      </div>
    </div>
  );
}

export default OverView;
