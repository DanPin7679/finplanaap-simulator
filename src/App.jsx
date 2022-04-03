import React from "react";
import ReactDOM from "react-dom";
import ChartManager from "./charts/ChartManager";

import "./index.css";

const App = () => <div>Hi there, I'm Simulator with Chart <ChartManager/> </div>;

ReactDOM.render(<App />, document.getElementById("app"));
